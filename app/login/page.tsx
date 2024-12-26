import { signIn } from "@/auth";
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
      <main className="flex flex-col container mx-auto px-4 flex-grow gap-8">
        <form
          action={async (data: FormData) => {
            "use server";
            const name = data.get("name");
            await signIn("credentials", { name }, { redirectTo: "/" });
          }}
        >
          <Input type="name" placeholder="Nazwisko" />
          <Button type="submit">Zaloguj</Button>
        </form>
      </main>
    </div>
  );
}
