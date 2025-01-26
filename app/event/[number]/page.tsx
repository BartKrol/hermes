import { getEnvelopeData } from "@/actions/envelopeAction";
import { auth } from "@/auth";
import Header from "@/components/layout/header";
import { checkAuthentication } from "@/lib/permissions";
import { getCharacterFullName } from "@/lib/character";
import { RichTextView } from "@/components/rich-text-view";
import GoBackButton from "@/components/layout/go-back-button";
import EventSwitcher from "@/components/event-switcher";
import { getTranslations } from "next-intl/server";

export type EventPageProps = {
  params: Promise<{ number: string }>;
};

export default async function EventPage({ params }: EventPageProps) {
  await checkAuthentication();

  const t = await getTranslations("Event");

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
        <main className="flex flex-col container mx-auto px-4 flex-grow gap-8 pb-8 h-full flex-1 max-w-screen-sm">
          <RichTextView document={doc.body} />
          {envelope.kind === "first_choice" && (
            <EventSwitcher envelope={envelope} />
          )}
        </main>
        <footer className="flex flex-row items-center justify-end pt-2 pb-4">
          <GoBackButton />
        </footer>
      </div>
    );
  } catch (error: unknown) {
    console.log(error);

    return (
      <div className="flex flex-col min-h-screen justify-between">
        <Header name={characterFullName} />
        <main className="flex flex-col container mx-auto px-4 flex-grow gap-8 max-w-screen-sm">
          <div>{t("not_found")}</div>
        </main>
      </div>
    );
  }
}
