import { getActiveEdgeData } from "@/actions/edgesAction";
import { FirstChoiceEnvelopeData } from "@/lib/envelopes";
import EventSwitcher from "./EventSwitcher";
import { getCharacterName } from "@/lib/character";

export async function FirstChoice({
  envelope,
}: {
  envelope: FirstChoiceEnvelopeData;
}) {
  const character = await getCharacterName();
  const edge = await getActiveEdgeData(envelope.node);
  const event = envelope.events[character];
  return (
    <EventSwitcher
      node={envelope.node}
      checked={edge.active === 1}
      event={event}
    />
  );
}
