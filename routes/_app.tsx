/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head, asset } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  const title = "Habission";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <link
          rel="stylesheet"
          href={asset(
            "https://api.fonts.coollabs.io/css2?family=M+PLUS+Rounded+1c:wght@400;500&display=swap"
          )}
        />
        <link
          rel="stylesheet"
          href={asset(
            "https://cdn.jsdelivr.net/npm/@tabler/icons@1.76.0/iconfont/tabler-icons.min.css"
          )}
        />
      </Head>
      <props.Component />
    </>
  );
}
