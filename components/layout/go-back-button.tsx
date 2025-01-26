"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function GoBackButton() {
  const t = useTranslations("Event");
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
        {t("go_back")}
      </Button>
    </div>
  );
}
