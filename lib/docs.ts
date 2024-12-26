import "dotenv/config";

import { google } from "googleapis";
import path from "path";

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(
    process.cwd(),
    process.env.GOOGLE_APPLICATION_CREDENTIALS || ""
  ),
  scopes: ["https://www.googleapis.com/auth/documents.readonly"],
});

const docs = google.docs({ version: "v1", auth });

export type GoogleDocContent = {
  title: string;
  body: (string | { text: string; bold: boolean })[];
};

export async function getDoc(docId: string) {
  if (!docId || typeof docId !== "string") {
    throw new Error("Document ID is required");
  }

  try {
    // Fetch the document
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

    return { title, body };
  } catch (error: unknown) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
}

export function getIdFromUrl(url: string) {
  return url.match(/[-\w]{25,}/)?.[0];
}
