"use client";

import { getActiveEdgesData, setActiveEdge } from "@/actions/edgesAction";
import { revalidateEnvelopeData } from "@/actions/envelopeAction";
import { setTime } from "@/actions/settingsAction";
import { DateTimePicker } from "@/components/date-time-picker";
import { LoadingSpinner } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings } from "@/lib/settings";
import { useState } from "react";

type AdminViewProps = {
  activeEdges: { id: number; name: string; active: number }[];
  settings: Record<Settings, string>;
};

export default function AdminView({
  activeEdges: initialActiveEdges,
  settings: initialSettings,
}: AdminViewProps) {
  const [activeEdges, setActiveEdges] = useState(initialActiveEdges);
  const [settings, setSettings] = useState(initialSettings);
  const [isRevalidating, setIsRevalidating] = useState(false);

  const handleSetTime = async (date: Date) => {
    const result = await setTime(date);
    setSettings(result);
  };

  return (
    <div className="flex flex-col gap-10 pt-10">
      <div className="flex flex-col gap-4">
        {activeEdges.map((node) => (
          <div key={node.id} className="flex items-center gap-2">
            <Switch
              id={node.name}
              checked={node.active === 1}
              onCheckedChange={async (checked) => {
                await setActiveEdge(node.name, checked ? 1 : 0);
                const newActiveEdges = await getActiveEdgesData();
                setActiveEdges(newActiveEdges);
              }}
            />
            <Label htmlFor={node.name}>{node.name}</Label>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Button
          disabled={isRevalidating}
          onClick={async () => {
            setIsRevalidating(true);
            await revalidateEnvelopeData();
            setIsRevalidating(false);
          }}
        >
          Revalidate
        </Button>
        {isRevalidating && <LoadingSpinner />}
      </div>
      <div className="flex flex-row gap-3 items-center">
        <DateTimePicker
          onSubmit={handleSetTime}
          label="End Game"
          date={settings[Settings.EndTime]}
        />
      </div>
    </div>
  );
}
