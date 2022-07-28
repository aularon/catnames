/** @jsx h */
import { h } from "preact";
import Cat from "../islands/Cat.tsx";

import { PageProps } from "$fresh/server.ts";

export default function Home({ url: { searchParams } }: PageProps) {
  const incoming = Object.fromEntries(
    ["name", "image", "font"].map((bit) => [bit, searchParams.get(bit)]),
  );

  return <Cat {...incoming} />;
}
