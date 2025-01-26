"use server";

import eventsData from "@/events.json";
import { getDoc, revalidateAllDocuments } from "@/lib/docs";

import { Event } from "@/lib/events";

type Events = Record<keyof typeof eventsData, Event>;

const envelopes = eventsData as Events;

export async function getEnvelopeData(number: string, character: string) {
  if (!envelopes[number as keyof typeof envelopes]) {
    throw new Error("Envelope not found");
  }

  const envelope: Event = envelopes[number as keyof typeof envelopes];

  const docId =
    envelope.kind === "second_alternative"
      ? envelope.docs[character]
      : envelope.doc;

  if (!docId) {
    throw new Error("Document ID is required");
  }
  const doc = await getDoc(docId);

  return { doc, envelope };
}

export async function revalidateEnvelopeData() {
  await revalidateAllDocuments();
}
