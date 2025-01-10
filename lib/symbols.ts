import characters from "@/characters.json";
import { Character } from "./character";

const defaultList = [
  {
    symbol: "ࠓ",
    number: 18,
  },
  {
    symbol: "࠳",
    number: 93,
  },
  {
    symbol: "ࠁ",
    number: 84,
  },
  {
    symbol: "ࠆ",
    number: 42,
  },
  {
    symbol: "ࠍ",
    number: 27,
  },
  {
    symbol: "࠵",
    number: 35,
  },
  {
    symbol: "ࠕ",
    number: 61,
  },
  {
    symbol: "ࠂ",
    number: 52,
  },
  {
    symbol: "ࠑ",
    number: 72,
  },
  {
    symbol: "ࠌ",
    number: 79,
  },
];

export function getSymbolListForCharacter(name: Character) {
  if (!characters[name]) {
    throw new Error("No character found with the name: " + name);
  }
  const list = [...defaultList];

  const characterList = characters[name].symbols;

  list.splice(1, 0, characterList[3]);
  list.splice(3, 0, characterList[2]);
  list.splice(6, 0, characterList[1]);
  list.splice(9, 0, characterList[0]);

  return list;
}

export const trainingSymbols = [
  {
    symbol: "α",
    number: 18,
  },
  {
    symbol: "θ",
    number: 93,
  },
  {
    symbol: "β",
    number: 26,
  },
  {
    symbol: "λ",
    number: 84,
  },
  {
    symbol: "μ",
    number: 27,
  },
  {
    symbol: "Δ",
    number: 35,
  },
  {
    symbol: "Ω",
    number: 58,
  },
];
