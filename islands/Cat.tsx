/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import { imageSrc } from "../lib/utils.ts";
import { reverseFontsMap } from "../lib/font.ts";

import Icon, { ICON_NAME } from "../components/icons.tsx";
import { Head } from "$fresh/runtime.ts";
import { ICat } from "../types.ts";

export default function Cat(
  { name, image, font, custom }: ICat,
) {
  const url = `https://cats.aularon.com/?` + new URLSearchParams({
    name: name,
    image: image + "",
    font: reverseFontsMap[font],
  }).toString();

  const enc = {
    url: encodeURIComponent(url),
    text: encodeURIComponent("اسم قطّي هو: " + name),
  };

  const imageUrl = imageSrc(image, 2000);

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
        <title>{name} - اسم قطّك!</title>
        {custom && <link rel="canonical" href={url} />}
        <meta property="og:title" content={name} />
        <meta property="og:image" content={imageUrl} />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="og:description" content="اعثر على قطّك" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ar_EG" />
      </Head>
      <div
        class={tw`p-1 mx-auto max-w-screen-md`}
        style="text-align: center; direction: rtl"
      >
        <h1
          style={`font-size: 3em; font-size: min(${
            (200 /
              name.length).toFixed(2)
          }vw, 5em); font-family: ${font}`}
        >
          {name}
        </h1>
        {image && (
          <img
            src={imageSrc(image)}
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
