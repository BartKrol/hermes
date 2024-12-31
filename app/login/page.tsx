import { signInAction } from "@/actions/authAction";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isAuthenticated } from "@/lib/permissions";
import { redirect } from "next/navigation";

export default async function SignIn() {
  if (await isAuthenticated()) {
    redirect("/");
  }

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex flex-col container mx-auto px-4 flex-grow gap-8 pt-2 items-center">
        <h1 className="text-xl font-semibold mt-2">
          Witaj w Panelu Misji Hermesa
        </h1>
        <form action={signInAction} className="flex flex-row gap-4">
          <Input id="name" name="name" placeholder="Nazwisko" />
          <Button type="submit">Zaloguj</Button>
        </form>
      </main>
    </div>
  );
}
