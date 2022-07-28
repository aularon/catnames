/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { name } from "../lib/name.ts";
import image from "../lib/image.ts";
import font from "../lib/font.ts";

export default function Cat() {
  const [randomName, setRandomName] = useState(name());
  const [randomImage, setRandomImage] = useState(image());
  const [randomFont, setRandomFont] = useState(font());
  function randomize() {
    setRandomName(name());
    setRandomImage(image());
  }

  return (
    <div
      class={tw`p-4 mx-auto max-w-screen-md`}
      style="text-align: center; direction: rtl"
    >
      <h1
        onClick={randomize}
        style={`font-size: 2em; font-family: ${randomFont}`}
      >
        {randomName}
      </h1>
      <img
        src={randomImage}
        style="max-height: 80vh; display: block; margin: 0 auto"
      />
    </div>
  );
}
