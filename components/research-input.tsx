"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { LoadingSpinner } from "./loader";
import { useTranslations } from "next-intl";

export type ResearchInputProps = {
  training?: boolean;
};

export function ResearchInput({ training = false }: ResearchInputProps) {
  const t = useTranslations("Home");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [number, setNumber] = useState("");

  const handleSearch = () =>
    startTransition(() => {
      router.push(training ? `training/${number}` : `/event/${number}`);
    });

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="relative w-full">
        <Input
          placeholder={t("number")}
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full border-indigo-900/50 bg-black/50 h-12 pl-4 pr-12 text-lg font-medium text-blue-200 placeholder:text-blue-300/40 focus-visible:ring-blue-500"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-300 opacity-70 pointer-events-none">
          #
        </div>
      </div>
      <Button
        onClick={handleSearch}
        disabled={!number || isPending}
        className="w-full py-6 bg-gradient-to-r from-blue-700 to-indigo-800 hover:brightness-110 transition-all border-none text-white font-bold text-lg relative overflow-hidden group"
      >
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="absolute inset-0 bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors"></span>
          {isPending ? (
            <LoadingSpinner />
          ) : (
            <>
              <span className="relative z-10 tracking-wider">
                {t("research")}
              </span>
              <span className="ml-2 relative z-10">→</span>
            </>
          )}
        </span>
      </Button>
    </div>
  );
}
