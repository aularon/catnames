/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <title>اسم قطّك</title>
        {
          // بلا معنى
        }
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // @ts-ignore
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri&family=Lalezar&family=Noto+Nastaliq+Urdu&family=Vibes&display=swap"
          rel="stylesheet"
        />
      </Head>
      <props.Component />
    </>
  );
}
