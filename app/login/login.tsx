"use client";

import { LoadingSpinner } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export type LoginProps = {
  onSignIn: (data: FormData) => Promise<undefined | { message: string }>;
};

export default function Login({ onSignIn }: LoginProps) {
  const t = useTranslations("Login");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

  const trySigningIn = async (data: FormData) => {
    setIsLoading(true);
    try {
      const error = await onSignIn(data);
      if (error) {
        toast.error(error.message);
      }
      router.push("/");
    } catch (e) {
      console.log(e);
      toast.error("Error!");
    }
    setIsLoading(false);
  };

  return (
    <form action={trySigningIn} className="w-full">
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400/70 text-sm">
            ID:
          </div>
          <Input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("last_name")}
            className="pl-10 h-12 w-full bg-black/50 border-indigo-900/50 text-blue-200 placeholder:text-indigo-300/40 focus-visible:ring-blue-500"
            required
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <div
              className={`w-2 h-2 rounded-full ${
                name ? "bg-green-500" : "bg-indigo-700/50"
              } transition-colors duration-300`}
            ></div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading || !name}
          className="w-full py-6 bg-gradient-to-r from-blue-700 to-indigo-800 hover:brightness-110 transition-all"
        >
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="absolute inset-0 bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors"></span>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <span className="mr-2 text-lg">⟳</span>
                <span className="font-bold tracking-wide">{t("login")}</span>
              </>
            )}
          </span>
        </Button>
      </div>
    </form>
  );
}
