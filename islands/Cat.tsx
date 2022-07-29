/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { name } from "../lib/name.ts";
import image from "../lib/image.ts";
import font, { reverseFontsMap } from "../lib/font.ts";

import Icon, { ICON_NAME } from "../components/icons.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Cat(
  { name: customName, image: customImage, font: customFont }: {
    name?: string;
    image?: number | string;
    font?: string;
  },
) {
  const [randomName, setRandomName] = useState(name(customName));
  const [randomImage, setRandomImage] = useState(
    image(
      typeof customImage === "number"
        ? customImage
        : parseInt(customImage || ""),
    ),
  );
  const [randomFont, setRandomFont] = useState(font(customFont));
  const url = `https://cats.aularon.com/?` + new URLSearchParams({
    name: randomName,
    image: randomImage + "",
    font: reverseFontsMap[randomFont],
  }).toString();
  function randomize() {
    setRandomName(name());
    setRandomImage(image());
  }
  const enc = {
    url: encodeURIComponent(url),
    text: encodeURIComponent("اسم قطّي هو: " + randomName),
  };

  const imageUrl = "https://openclipart.org/image/2000px/" + randomImage;

  const links: Record<ICON_NAME, string> = {
    Link: url,
    Facebook: `https://www.facebook.com/sharer.php?display=page&u=${enc.url}`,
    Twitter:
      `https://twitter.com/intent/tweet?url=${enc.url}&text=${enc.text}&via=aularon`,
    Telegram: `https://t.me/share/url?url=${enc.url}&text=${enc.text}`,
    WhatsApp: `https://wa.me/?text=${enc.text}%20${enc.url}`,
    GitHub: "https://github.com/aularon/catnames",
  };

  return (
    <>
      <Head>
        <title>{randomName} - اسم قطّك!</title>
        {customName && <link rel="canonical" href={url} />}
        <meta property="og:title" content={randomName} />
        <meta property="og:image" content={imageUrl} />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="og:description" content="اعثر على قطّك" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div
        class={tw`p-1 mx-auto max-w-screen-md`}
        style="text-align: center; direction: rtl"
      >
        <h1
          onClick={randomize}
          style={`font-size: 3em; font-size: min(${
            (200 /
              randomName.length).toFixed(2)
          }vw, 5em); font-family: ${randomFont}`}
        >
          {randomName}
        </h1>
        {randomImage && (
          <img
            src={"https://openclipart.org/download/" + randomImage}
            style="max-height: 80vh; display: block; margin: 1em auto"
          />
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "1em",
          }}
        >
          {Object.entries(links).map(([iconName, link]) => (
            <a href={link} target="_blank" style={{ maxWidth: "36px" }}>
              <Icon name={iconName} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
