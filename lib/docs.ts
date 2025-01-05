import {
  getAllDocuments,
  getDocument,
  saveDocument,
  updateDocument,
} from "@/db/documents";
import "dotenv/config";

import { google } from "googleapis";

export type GoogleDocContent = {
  title: string;
  body: {
    text: string;
    bold: boolean;
  }[];
};

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(
    Buffer.from(
      process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64 || "",
      "base64"
    ).toString("utf8")
  ),
  scopes: ["https://www.googleapis.com/auth/documents.readonly"],
});

const docs = google.docs({ version: "v1", auth });

export async function cacheDoc(docId: string, docData: GoogleDocContent) {
  const existingDoc = await getDocument(docId);

  if (existingDoc) {
    return existingDoc;
  }
  saveDocument(docId, docData);
  return docData;
}

export async function getDoc(docId: string) {
  if (!docId || typeof docId !== "string") {
    throw new Error("Document ID is required");
  }

  try {
    const cachedDoc = await getDocument(docId);

    if (cachedDoc) {
      return {
        title: cachedDoc.title,
        body: JSON.parse(cachedDoc.content),
      } as GoogleDocContent;
    }

    // Fetch the document if not cached
    const document = await docs.documents.get({ documentId: docId });

    const title = document.data.title || "Untitled Document";
    const content = document.data.body?.content || [];

    // Extract text content with styles
    const body = content.flatMap((element) => {
      if (!element.paragraph) return [];
      return (
        element.paragraph.elements?.map((e) => {
          const text = e.textRun?.content || "";
          const isBold = e.textRun?.textStyle?.bold || false;

          return isBold ? { text, bold: true } : { text, bold: false };
        }) || []
      );
    });

    const docData = { title, body };

    // Cache the document in the database
    await cacheDoc(docId, docData);

    return docData as GoogleDocContent;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
}

export async function revalidateAllDocuments() {
  try {
    const cachedDocs = await getAllDocuments();

    for (const cachedDoc of cachedDocs) {
      try {
        // Fetch the updated document
        const document = await docs.documents.get({ documentId: cachedDoc.id });

        const title = document.data.title || "Untitled Document";
        const content = document.data.body?.content || [];

        // Extract text content with styles
        const body = content.flatMap((element) => {
          if (!element.paragraph) return [];
          return (
            element.paragraph.elements?.map((e) => {
              const text = e.textRun?.content || "";
              const isBold = e.textRun?.textStyle?.bold || false;

              return isBold ? { text, bold: true } : { text, bold: false };
            }) || []
          );
        });

        const updatedData = { title, body };

        // Update the document in the cache
        updateDocument(cachedDoc.id, updatedData);

        console.log(`Revalidated document with ID: ${cachedDoc.id}`);
      } catch (error) {
        console.error(
          `Failed to revalidate document with ID: ${cachedDoc.id}`,
          error
        );
      }
    }
  } catch (error) {
    console.error("Failed to revalidate documents", error);
  }
}

export function getIdFromUrl(url: string) {
  return url.match(/[-\w]{25,}/)?.[0];
}
