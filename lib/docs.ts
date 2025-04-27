import {
  getAllDocuments,
  getDocument,
  saveDocument,
  updateDocument,
} from "@/db/documents";

import "dotenv/config";

import * as contentful from "contentful";

import type { Document } from "@contentful/rich-text-types";
import config from "@/config";

export const client = contentful.createClient({
  space: config.CONTENTFUL_SPACE_ID,
  accessToken: config.CONTENTFUL_ACCESS_TOKEN,
});

export type DocData = {
  title: string;
  body: Document;
};

export async function cacheDoc(docId: string, docData: DocData) {
  saveDocument(docId, docData);
  return docData;
}

export async function getContent(docId: string): Promise<DocData> {
  const document = await client.getEntry(docId, {
    locale: "en",
  });

  return {
    title: document.fields["title"] as string,
    body: document.fields["text"] as Document,
  };
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
      } as DocData;
    }

    const docData = await getContent(docId);

    await cacheDoc(docId, docData);

    return docData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
}

export async function revalidateAllDocuments() {
  try {
    const cachedDocs = await getAllDocuments();

    for (const cachedDoc of cachedDocs) {
      try {
        const docData = await getContent(cachedDoc.id);

        updateDocument(cachedDoc.id, docData);

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
