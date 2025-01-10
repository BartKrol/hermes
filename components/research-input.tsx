"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { LoadingSpinner } from "./loader";

export type ResearchInputProps = {
  training?: boolean;
};

export function ResearchInput({ training = false }: ResearchInputProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [number, setNumber] = useState("");

  const handleSearch = () =>
    startTransition(() => {
      router.push(training ? `training/${number}` : `/event/${number}`);
    });

  return (
    <div className="flex flex-row justify-between gap-2">
      <Input
        placeholder="Liczba"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Button onClick={handleSearch} disabled={!number || isPending}>
        {isPending ? <LoadingSpinner /> : "Zbadaj"}
      </Button>
    </div>
  );
}
