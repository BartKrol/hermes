import { eq } from "drizzle-orm";
import { db } from "./drizzle";
import { documentsTable } from "./schema";

export async function getAllDocuments() {
  return await db.query.documentsTable.findMany();
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
