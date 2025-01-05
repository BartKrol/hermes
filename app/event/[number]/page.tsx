import { getEnvelopeData } from "@/actions/envelopeAction";
import { auth } from "@/auth";
import Header from "@/components/header";
import { checkAuthentication } from "@/lib/permissions";
import { cn } from "@/lib/utils";
import { FirstChoice } from "./FirstChoice";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export type EventPageProps = {
  params: Promise<{ number: string }>;
};

export default async function EventPage({ params }: EventPageProps) {
  await checkAuthentication();

  const { number } = await params;

  const session = await auth();

  try {
    const { doc, envelope } = await getEnvelopeData(
      number,
      session!.user!.name!
    );

    return (
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <main className="flex flex-col container mx-auto px-4 flex-grow gap-8">
          <div>
            {doc.body.map((paragraph, i) => (
              <p
                key={i}
                className={cn(
                  "leading-7",
                  paragraph.bold ? "font-bold" : "font-normal"
                )}
              >
                {paragraph.text === "\n" ? <br /> : paragraph.text}
              </p>
            ))}
          </div>

          {envelope.kind === "first_choice" && (
            <FirstChoice envelope={envelope} />
          )}
        </main>
      </div>
    );
  } catch (error: unknown) {
    console.log(error);

    return (
      <div className="flex flex-col min-h-screen justify-between">
        <Header />

        <main className="flex flex-col container mx-auto px-4 flex-grow gap-8">
          <div>Nie znaleziono dokumentu</div>
        </main>
      </div>
    );
  }
}
