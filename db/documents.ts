import { eq } from "drizzle-orm";
import { db } from "./drizzle";
import { documentsTable } from "./schema";
import eventsData from "@/events.json";
import { getContent } from "@/lib/docs";

export async function getAllDocuments() {
  return await db.query.documentsTable.findMany();
}

export async function fetchAllDocuments() {
  // Extract all unique document IDs from events.json
  const documentIds = new Set<string>();

  for (const eventData of Object.values(eventsData)) {
    if ("doc" in eventData && eventData.doc) {
      documentIds.add(eventData.doc);
    }
    if ("docs" in eventData && eventData.docs) {
      for (const docId of Object.values(eventData.docs)) {
        if (docId) {
          documentIds.add(docId);
        }
      }
    }
  }

  console.log(`Found ${documentIds.size} unique documents to fetch`);

  const results = {
    success: 0,
    failed: 0,
    errors: [] as string[],
  };

  // Download and save each document
  for (const docId of documentIds) {
    try {
      // Check if document already exists
      const existingDoc = await getDocument(docId);
      if (existingDoc) {
        console.log(`Document ${docId} already exists, skipping...`);
        results.success++;
        continue;
      }

      // Download document from Contentful
      console.log(`Fetching document ${docId}...`);
      const docData = await getContent(docId);

      // Save to database
      await db.insert(documentsTable).values({
        id: docId,
        title: docData.title,
        content: JSON.stringify(docData.body),
      });

      console.log(`Successfully saved document ${docId}: "${docData.title}"`);
      results.success++;
    } catch (error) {
      const errorMessage = `Failed to fetch document ${docId}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
      console.error(errorMessage);
      results.errors.push(errorMessage);
      results.failed++;
    }
  }

  console.log(
    `\nFetch completed: ${results.success} successful, ${results.failed} failed`
  );
  if (results.errors.length > 0) {
    console.log("Errors:", results.errors);
  }

  return results;
}

export async function getDocument(docId: string) {
  return await db.query.documentsTable.findFirst({
    where: eq(documentsTable.id, docId),
  });
}

export async function saveDocument(
  docId: string,
  docData: { title: string; body: object }
) {
  const existingDoc = await getDocument(docId);

  if (existingDoc) {
    return existingDoc;
  }

  await db.insert(documentsTable).values({
    id: docId,
    title: docData.title,
    content: JSON.stringify(docData.body),
  });

  return docData;
}

export async function updateDocument(
  docId: string,
  docData: { title: string; body: object }
) {
  await db
    .update(documentsTable)
    .set({
      title: docData.title,
      content: JSON.stringify(docData.body),
    })
    .where(eq(documentsTable.id, docId));
}
