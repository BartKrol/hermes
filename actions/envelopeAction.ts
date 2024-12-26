import envelopes from "@/envelopes.json";
import { getDoc, getIdFromUrl } from "@/lib/docs";

export async function getEnvelopeData(number: string) {
  if (!envelopes[number as keyof typeof envelopes]) {
    throw new Error("Envelope not found");
  }

  const docUrl = envelopes[number as keyof typeof envelopes].doc;
  if (!docUrl) {
    throw new Error("Document URL is required");
  }
  const docId = getIdFromUrl(docUrl);
  if (!docId) {
    throw new Error("Document ID is required");
  }
  const doc = await getDoc(docId);
  return doc;
}
