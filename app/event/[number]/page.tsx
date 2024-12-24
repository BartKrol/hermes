import Header from "@/components/header";

export type EventPageProps = {
  params: {
    number: string;
  };
};

export default function EventPage({ params }: EventPageProps) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex flex-col container mx-auto px-4 flex-grow gap-8">
        <span className="text-2xl font-semibold mb-4">
          Event {params.number}
        </span>
      </main>
    </div>
  );
}
