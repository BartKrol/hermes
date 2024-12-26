"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ResearchInput() {
  const router = useRouter();
  const handleSearch = (number: string) => {
    router.push(`/event/${number}`);
  };

  const [number, setNumber] = useState("");

  return (
    <div className="flex flex-row justify-between">
      <Input
        placeholder="Liczba"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Button onClick={() => handleSearch(number)}>Zbadaj</Button>
    </div>
  );
}
