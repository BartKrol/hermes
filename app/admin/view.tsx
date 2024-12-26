"use client";

import { getActiveEdgeData, setActiveEdge } from "@/actions/edgesAction";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

type AdminViewProps = {
  activeEdges: { id: number; name: string; active: number }[];
};

export default function AdminView({
  activeEdges: initialActiveEdges,
}: AdminViewProps) {
  const [activeEdges, setActiveEdges] = useState(initialActiveEdges);
  return (
    <>
      {activeEdges.map((node) => (
        <div key={node.id} className="flex items-center gap-2">
          <Switch
            id={node.name}
            checked={node.active === 1}
            onCheckedChange={async (checked) => {
              await setActiveEdge(node.name, checked ? 1 : 0);
              const newActiveEdges = await getActiveEdgeData();
              setActiveEdges(newActiveEdges);
            }}
          />
          <Label htmlFor={node.name}>{node.name}</Label>
        </div>
      ))}
    </>
  );
}
