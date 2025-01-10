import { auth } from "@/auth";
import characters from "@/characters.json";

export type Character = keyof typeof characters;

export async function getCharacterName() {
  const session = await auth();
  return session!.user!.name! as Character;
}

export async function getCharacterFullName() {
  const session = await auth();
  const name = session!.user!.name! as Character;
  return characters[name]?.name;
}
