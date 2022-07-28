import { sample } from "https://deno.land/std@0.150.0/collections/sample.ts";

const fontsMap: Record<string, string> = {
  amiri: "'Amiri', serif",
  lalezar: "'Lalezar', cursive",
  nastaliq: "'Noto Nastaliq Urdu', serif",
  vibes: "'Vibes', cursive",
};
export const reverseFontsMap = Object.fromEntries(
  Object.entries(fontsMap).map((pair) => pair.reverse()),
);
const fontNames = Object.values(fontsMap);

const font = (suggestedFont = ""): string =>
  // @ts-ignore
  fontsMap[suggestedFont] || sample(fontNames);

export default font;
