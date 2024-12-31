"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingSpinner } from "./loader";

export function ResearchInput() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState("");

  const handleSearch = async () => {
    setIsLoading(true);
    await router.push(`/event/${number}`);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-row justify-between">
      <Input
        placeholder="Liczba"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Button onClick={handleSearch} disabled={!number || isLoading}>
        {isLoading ? <LoadingSpinner /> : "Zbadaj"}
      </Button>
    </div>
  );
}
