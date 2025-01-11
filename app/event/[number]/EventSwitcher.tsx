"use client";

import { getActiveEdgeData, setActiveEdge } from "@/actions/edgesAction";
import { LoadingSpinner } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { RefreshCw } from "lucide-react";
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
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleCheckedChange = async (active: boolean) => {
    await setActiveEdge(node, active ? 1 : 0);
    setChecked(active);
  };

  useEffect(() => {
    getActiveEdgeData(node).then((data) => setChecked(!!data.active));
  }, [node, setChecked]);

  const refresh = async () => {
    setIsRefreshing(true);
    const data = await getActiveEdgeData(node);
    setChecked(!!data.active);
    setIsRefreshing(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4 justify-between">
        <Switch checked={checked} onCheckedChange={handleCheckedChange} />
        <Label className="text-primary text-lg prose prose-invert">
          {!checked ? "Przeszłość" : "Alternatywna Przeszlosc"}
        </Label>
        <div className="flex row items-center">
          <Button
            onClick={refresh}
            variant="link"
            disabled={isRefreshing}
            className="text-lg prose prose-invert mt-px"
          >
            {isRefreshing ? <LoadingSpinner /> : <RefreshCw />}
          </Button>
        </div>
      </div>
      {checked && (
        <div className="flex pt-2 justify-center gap-2">
          <span className="text-lg prose prose-invert">
            Twoja przeszłość jest pod numerem
          </span>
          <span className="prose-invert text-lg font-bold underline">
            <Link href={`/event/${event}`}>{event}</Link>
          </span>
        </div>
      )}
    </div>
  );
}
