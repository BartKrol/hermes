import Header from "@/components/layout/header";
import { ResearchInput } from "@/components/research-input";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/layout/footer";
import { trainingSymbols } from "@/lib/symbols";
import { getTranslations } from "next-intl/server";

export default async function Training() {
  const t = await getTranslations("Home");

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex flex-col container mx-auto px-4 flex-grow gap-8">
        <div className="flex flex-col gap-6 pt-2">
          <h2 className="text-2xl font-semibold">{t("research_toolbox")}</h2>
          <ResearchInput training />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t("knowledge_base")}</h2>
          {trainingSymbols.map((data) => (
            <Card className="m-4" key={data.symbol}>
              <CardContent className="flex flex-row justify-between items-center">
                <span
                  className="text-9xl pt-8"
                  style={{ font: "Nunito, Segoe UI Emoji" }}
                >
                  {data.symbol}
                </span>
                <span className="text-7xl pt-8">{data.number}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}
