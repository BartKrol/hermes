"use client";

import { LoadingSpinner } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export type LoginProps = {
  onSignIn: (data: FormData) => Promise<undefined | { message: string }>;
};

export default function Login({ onSignIn }: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);
  const trySigningIn = async (data: FormData) => {
    setIsLoading(true);
    try {
      const error = await onSignIn(data);
      if (error) {
        toast.error(error.message);
      }
    } catch (e) {
      console.log(e);
      toast.error("Error!");
    }
    setIsLoading(false);
  };
  return (
    <form action={trySigningIn} className="flex flex-row gap-4">
      <Input id="name" name="name" placeholder="Nazwisko" />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <LoadingSpinner /> : "Zaloguj"}
      </Button>
    </form>
  );
}
