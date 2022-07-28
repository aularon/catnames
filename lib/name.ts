import { sample } from "https://deno.land/std@0.150.0/collections/sample.ts";
import parse from "./parse.ts";
// import names from "../data/names.json" assert { type: "json" };
import randomize from "./randomize.ts";
const names = JSON.parse(await Deno.readTextFile("./data/names.json"));

const options = await parse("./data");

export function name(): string {
  // @ts-ignore despair not for the json file is an array of strings!
  return randomize(options, sample(names));
}
