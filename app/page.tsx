import Header from "@/components/header";
import { ResearchInput } from "@/components/research-input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { checkAuthentication } from "@/lib/permissions";
import { getSymbolListForCharacter } from "@/lib/symbols";
import { getCharacterName } from "@/lib/character";
import characters from "@/characters.json";
import Footer from "@/components/footer";

export default async function Home() {
  await checkAuthentication();

  const character = await getCharacterName();

  const symbols = getSymbolListForCharacter(character);
  const characterData = characters[character];

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex flex-col container mx-auto px-4 flex-grow gap-8">
        <div className="py-4 px-2">
          <h2 className="text-2xl font-semibold mb-4">Przybornk Badawczy</h2>
        </div>
        <ResearchInput />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Symbol Badawczy</h2>
          <Card className="m-4">
            <CardContent className="flex justify-center items-center">
              <span className="text-9xl pt-4">{characterData.symbol}</span>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Baza Wiedzy</h2>
          {symbols.map((data) => (
            <Card className="m-4" key={data.symbol}>
              <CardContent className="flex flex-row justify-between items-center">
                <span className="text-9xl pt-8">{data.symbol}</span>
                {/* TODO */}
                <Separator className="h-full" orientation="vertical" />
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
