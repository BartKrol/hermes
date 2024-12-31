import { Character } from "@/lib/character";

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
