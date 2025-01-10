"use client";

import { getActiveEdgeData, setActiveEdge } from "@/actions/edgesAction";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useEffect, useState } from "react";

export type EventSwitcherProps = {
  node: string;
  checked: boolean;
  event: number;
};

export default function EventSwitcher({
  node,
  checked: initialChecked,
  event,
}: EventSwitcherProps) {
  const [checked, setChecked] = useState(initialChecked);

  const handleCheckedChange = async (active: boolean) => {
    await setActiveEdge(node, active ? 1 : 0);
    setChecked(active);
  };

  useEffect(() => {
    getActiveEdgeData(node).then((data) => setChecked(!!data.active));
  }, [node, setChecked]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={handleCheckedChange} />
        <Label className="text-lg prose prose-invert">
          {!checked ? "Przeszłość" : "Alternatywna Przeszlosc"}
        </Label>
      </div>
      {checked && (
        <div>
          <span className="text-lg prose prose-invert">
            Twoja przeszłość pod numerem{" "}
          </span>
          <span className="text-lg font-bold underline">
            <Link href={`/event/${event}`}>{event}</Link>
          </span>
        </div>
      )}
    </div>
  );
}
