import { getEnvelopeData } from "@/actions/envelopeAction";
import { auth } from "@/auth";
import Header from "@/components/header";
import { checkAuthentication } from "@/lib/permissions";
import { cn } from "@/lib/utils";
import { FirstChoice } from "./FirstChoice";
import { getCharacterFullName } from "@/lib/character";
import GoBack from "@/components/go-back";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export type EventPageProps = {
  params: Promise<{ number: string }>;
};

export default async function EventPage({ params }: EventPageProps) {
  await checkAuthentication();

  const { number } = await params;

  const session = await auth();

  const characterFullName = await getCharacterFullName();

  try {
    const { doc, envelope } = await getEnvelopeData(
      number,
      session!.user!.name!
    );

    return (
      <div className="flex flex-col min-h-screen justify-between h-full">
        <Header name={characterFullName} />
        <main className="flex flex-col container mx-auto px-4 flex-grow gap-8 pb-8 h-full flex-1">
          <article className="prose prose-invert">
            {doc.body
              .filter((p) => !!p.text.trim())
              .map((paragraph, i) => (
                <p
                  key={i}
                  className={cn(paragraph.bold ? "font-bold" : "font-normal")}
                >
                  {paragraph.text === "\n" ? <br /> : paragraph.text}
                </p>
              ))}
          </article>
          {envelope.kind === "first_choice" && (
            <FirstChoice envelope={envelope} />
          )}
        </main>
        <footer className="flex flex-row items-center justify-end pt-2 pb-4">
          <GoBack />
        </footer>
      </div>
    );
  } catch (error: unknown) {
    console.log(error);

    return (
      <div className="flex flex-col min-h-screen justify-between">
        <Header name={characterFullName} />
        <main className="flex flex-col container mx-auto px-4 flex-grow gap-8">
          <div>Nie znaleziono dokumentu</div>
        </main>
      </div>
    );
  }
}
