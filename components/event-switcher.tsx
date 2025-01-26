import { refreshActiveEdges, setActiveEdgeForm } from "@/actions/edgesAction";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { RefreshCw } from "lucide-react";
import Link from "next/link";
import { getActiveEdgeData } from "@/actions/edgesAction";
import { FirstChoiceEventData } from "@/lib/events";
import { getCharacterName } from "@/lib/character";
import { getTranslations } from "next-intl/server";

export type EventSwitcherProps = {
  envelope: FirstChoiceEventData;
};

export default async function EventSwitcher({ envelope }: EventSwitcherProps) {
  const t = await getTranslations("Event");
  const character = await getCharacterName();
  const edge = await getActiveEdgeData(envelope.node);
  const event = envelope.events[character];

  const checked = edge.active === 1;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4 justify-between">
        <form action={setActiveEdgeForm}>
          <input name="node" type="hidden" value={edge.name} />
          <input name="active" type="hidden" value={edge.active} />
          <Switch checked={checked} type="submit" />
        </form>
        <Label className="text-primary text-lg prose prose-invert">
          {!checked ? t("past") : t("alternate_past")}
        </Label>
        <div className="flex row items-center">
          <Button
            onClick={refreshActiveEdges}
            variant="link"
            className="text-lg prose prose-invert mt-px"
          >
            <RefreshCw />
          </Button>
        </div>
      </div>
      {checked && (
        <div className="flex pt-2 justify-center gap-2">
          <span className="text-lg prose prose-invert">
            {t("your_past_event")}
          </span>
          <span className="prose-invert text-lg font-bold underline">
            <Link href={`/event/${event}`}>{event}</Link>
          </span>
        </div>
      )}
    </div>
  );
}
