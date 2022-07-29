/** @jsx h */
import { h } from "preact";
import Cat from "../islands/Cat.tsx";

import { Handlers, PageProps } from "$fresh/server.ts";
import { name } from "../lib/name.ts";
import image from "../lib/image.ts";
import font from "../lib/font.ts";
import { ICat } from "../types.ts";

export const handler: Handlers<ICat> = {
  GET(req, ctx) {
    const url = new URL(req.url);

    const incoming = Object.fromEntries(
      ["name", "image", "font"].map((
        bit,
      ) => [bit, url.searchParams.get(bit) || ""]),
    );
    const cat: ICat = {
      name: name(incoming.name),
      image: image(
        typeof incoming.image === "number"
          ? incoming.image
          : parseInt(incoming.image || ""),
      ),
      font: font(incoming.font),
      custom: !!incoming.name,
    };

    return ctx.render(cat);
  },
};

export default function Home({ data }: PageProps<ICat>) {
  // return (
  //   <div>
  //   </div>
  // );

  return <Cat {...data} />;
}
