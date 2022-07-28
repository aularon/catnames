import { sample } from "https://deno.land/std@0.150.0/collections/sample.ts";
// import imageIds from "../data/openclipart.json" assert { type: "json" };

const imageIds: number[] = JSON.parse(
  await Deno.readTextFile("./data/openclipart.json"),
)
  .filter((item: string | number) => typeof item === "number");

const image = (customImage?: number): number =>
  (customImage && imageIds.includes(customImage))
    ? customImage
    : sample(imageIds) || 0;

export default image;
