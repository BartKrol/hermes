import { getEnvelopeData } from "@/actions/envelopeAction";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import GoBack from "@/components/go-back";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export type TrainingPageProps = {
  params: Promise<{ number: string }>;
};

export default async function TrainingEventPage({ params }: TrainingPageProps) {
  const { number } = await params;

  try {
    const { doc } = await getEnvelopeData(number, "training");

    return (
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <main className="flex flex-col container mx-auto px-4 flex-grow gap-8 pb-8">
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
          <GoBack />
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
