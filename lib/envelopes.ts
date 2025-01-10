import { Character } from "@/lib/character";
import envelopes from "@/envelopes.json";

export type Envelope =
  | ({
      kind: "first_choice";
    } & FirstChoiceEnvelopeData)
  | {
      kind: "first_alternative";
      doc: string;
    }
  | {
      kind: "second_alternative";
      docs: Record<string, string>;
    };

export type FirstChoiceEnvelopeData = {
  doc: string;
  node: string;
  events: Record<Character, number>;
};

const EnvelopesList = Object.values(envelopes) as Envelope[];

const FirstChoices = EnvelopesList.filter(
  (envelope) => envelope.kind === "first_choice"
);

const NodesToCharacters = FirstChoices.reduce((acc, choice) => {
  acc[choice.node] = choice;
  return acc;
}, {} as Record<string, FirstChoiceEnvelopeData>);

export function nodeToCharacters(node: string) {
  const events = NodesToCharacters[node].events;

  if (!events) {
    return [] as string[];
  }

  return Object.keys(NodesToCharacters[node].events);
}
