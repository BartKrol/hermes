import Header from "@/components/layout/header";
import { ResearchInput } from "@/components/research-input";
import { Card, CardContent } from "@/components/ui/card";
import { checkAuthentication } from "@/lib/permissions";
import { getSymbolListForCharacter } from "@/lib/symbols";
import { getCharacterName } from "@/lib/character";
import characters from "@/characters.json";
import Footer from "@/components/layout/footer";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  await checkAuthentication();
  const t = await getTranslations("Home");

  const character = await getCharacterName();

  const symbols = getSymbolListForCharacter(character);
  const characterData = characters[character];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-indigo-950/40 to-black text-white">
      <Header name={characterData.name} />
      <main className="flex flex-col container mx-auto px-4 flex-grow gap-8 max-w-screen-sm py-6">
        {/* Research input section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 flex items-center alien-text-glow">
            <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 alien-pulse"></span>
            {t("research_toolbox")}
          </h2>
          <div className="backdrop-blur-md bg-black/40 p-4 rounded-xl border border-indigo-900/50 shadow-xl hover:shadow-indigo-900/10 transition-all duration-300 alien-box-glow scan-line">
            <ResearchInput />
          </div>
        </div>

        {/* Symbol section */}
        <div className="mt-2">
          <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 flex items-center alien-text-glow">
            <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 alien-pulse"></span>
            {t("research_symbol")}
          </h2>
          <Card className="m-0 backdrop-blur-md bg-black/40 border-indigo-900/50 overflow-hidden hover:shadow-indigo-900/20 hover:shadow-lg transition-all duration-300 alien-box-glow">
            <CardContent className="flex justify-center items-center p-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center blur-xl opacity-50 scale-110">
                  <span
                    className="text-9xl"
                    style={{ font: "Nunito, Segoe UI Emoji" }}
                  >
                    {characterData.symbol}
                  </span>
                </div>
                <div className="absolute -inset-10 bg-indigo-900/5 animate-pulse rounded-full blur-3xl"></div>
                <span
                  className="text-9xl relative z-10 alien-pulse"
                  style={{
                    font: "Nunito, Segoe UI Emoji",
                    animationDuration: "3s",
                  }}
                >
                  {characterData.symbol}
                </span>
                <div
                  className="absolute -inset-2 border border-indigo-900/20 rounded-full animate-ping opacity-20"
                  style={{ animationDuration: "4s" }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Knowledge base section */}
        <div className="mt-2">
          <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 flex items-center alien-text-glow">
            <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 alien-pulse"></span>
            {t("knowledge_base")}
          </h2>

          <div className="space-y-3">
            {symbols.map((data) => (
              <Card
                className="backdrop-blur-md bg-black/40 border-indigo-900/50 hover:bg-black/60 transition-all hover:shadow-lg hover:shadow-indigo-900/10 cursor-pointer scan-line"
                key={data.symbol}
              >
                <CardContent className="flex flex-row justify-between items-center p-4">
                  <div className="relative">
                    <div className="absolute inset-0 blur-sm opacity-50 scale-110">
                      <span
                        className="text-7xl"
                        style={{ font: "Nunito, Segoe UI Emoji" }}
                      >
                        {data.symbol}
                      </span>
                    </div>
                    <span
                      className="text-7xl relative z-10 alien-flicker"
                      style={{ font: "Nunito, Segoe UI Emoji" }}
                    >
                      {data.symbol}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-5xl font-light text-blue-200 alien-text-glow">
                      {data.number}
                    </span>
                    <div className="text-xs text-indigo-400/70 mt-1 terminal-text tracking-wider">
                      SEQUENCE CODE
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
