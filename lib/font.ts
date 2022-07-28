import { sample } from "https://deno.land/std@0.150.0/collections/sample.ts";

const font = () =>
  sample([
    "'Amiri', serif",
    "'Lalezar', cursive",
    "'Noto Nastaliq Urdu', serif",
    "'Vibes', cursive",
  ]);

export default font;
