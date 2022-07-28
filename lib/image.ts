import { sample } from "https://deno.land/std@0.150.0/collections/sample.ts";
// import imageIds from "../data/openclipart.json" assert { type: "json" };

const imageIds = JSON.parse(await Deno.readTextFile("./data/openclipart.json"))
  .filter((item: string | number) => typeof item === "number");

const image = () => "https://openclipart.org/download/" + sample(imageIds);

export default image;
