import { Character } from "@/lib/character";
import events from "@/events.json";

export type Event =
  | ({
      kind: "first_choice";
    } & FirstChoiceEventData)
  | {
      kind: "first_alternative";
      doc: string;
    }
  | {
      kind: "second_alternative";
      docs: Record<string, string>;
    }
  | {
      kind: "training";
      doc: string;
    };

export type FirstChoiceEventData = {
  doc: string;
  node: string;
  events: Record<Character, number>;
};

const EventsList = Object.values(events) as Event[];

const FirstChoices = EventsList.filter(
  (Event) => Event.kind === "first_choice"
);

const NodesToCharacters = FirstChoices.reduce((acc, choice) => {
  acc[choice.node] = choice;
  return acc;
}, {} as Record<string, FirstChoiceEventData>);

export function nodeToCharacters(node: string) {
  const events = NodesToCharacters[node].events;

  if (!events) {
    return [] as string[];
  }

  return Object.keys(NodesToCharacters[node].events);
}
