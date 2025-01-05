"use server";
import envelopesData from "@/envelopes.json";
import { getDoc, getIdFromUrl, revalidateAllDocuments } from "@/lib/docs";

import { Envelope } from "@/lib/envelopes";

type Envelopes = Record<keyof typeof envelopesData, Envelope>;

const envelopes = envelopesData as Envelopes;

export async function getEnvelopeData(number: string, character: string) {
  if (!envelopes[number as keyof typeof envelopes]) {
    throw new Error("Envelope not found");
  }

  const envelope: Envelope = envelopes[number as keyof typeof envelopes];

  const docUrl =
    envelope.kind === "second_alternative"
      ? envelope.docs[character]
      : envelope.doc;

  if (!docUrl) {
    throw new Error("Document URL is required");
  }
  const docId = getIdFromUrl(docUrl);
  if (!docId) {
    throw new Error("Document ID is required");
  }
  const doc = await getDoc(docId);

  return { doc, envelope };
}

export async function revalidateEnvelopeData() {
  await revalidateAllDocuments();
}
