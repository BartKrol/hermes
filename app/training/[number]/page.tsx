import { getEnvelopeData } from "@/actions/envelopeAction";
import Header from "@/components/layout/header";
import { RichTextView } from "@/components/rich-text-view";
import GoBackButton from "@/components/layout/go-back-button";
import { getTranslations } from "next-intl/server";

export type TrainingPageProps = {
  params: Promise<{ number: string }>;
};

export default async function TrainingEventPage({ params }: TrainingPageProps) {
  const { number } = await params;

  const t = await getTranslations("Event");

  try {
    const { doc } = await getEnvelopeData(number, "training");

    return (
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <main className="flex flex-col container mx-auto px-4 flex-grow gap-8 pb-8 max-w-screen-sm">
          <RichTextView document={doc.body} />
          <GoBackButton />
        </main>
      </div>
    );
  } catch (error: unknown) {
    console.log(error);

    return (
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <main className="flex flex-col container mx-auto px-4 flex-grow gap-8 max-w-screen-sm">
          <div>{t("not_found")}</div>
        </main>
      </div>
    );
  }
}
