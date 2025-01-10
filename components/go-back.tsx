"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();
  const handleBack = async () => {
    router.back();
  };

  return (
    <div className="w-full flex flex-row justify-end">
      <Button
        className="prose-invert underline"
        variant="link"
        onClick={handleBack}
      >
        <ArrowLeft />
        Powrót
      </Button>
    </div>
  );
}
