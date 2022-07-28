import { sample } from "https://deno.land/std@0.150.0/collections/mod.ts";

export default function randomize(
  options: Record<string, string[]>,
  name: string,
) {
  return name.split(" ")
    .map((bit) => options[bit] ? sample(options[bit]) : bit)
    .join(" ");
}
