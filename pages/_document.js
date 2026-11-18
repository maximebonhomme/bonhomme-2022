import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Maxime Bonhomme - Senior Software Engineer"
        />
        <meta name="image" content="https://bonhomme.lol/meta-og.png" />
        <meta itemProp="name" content="Bonhomme" />
        <meta
          itemProp="description"
          content="Maxime Bonhomme - Senior Software Engineer"
        />
        <meta itemProp="image" content="https://bonhomme.lol/meta-og.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Bonhomme - Developer" />
        <meta
          name="twitter:description"
          content="Maxime Bonhomme - Senior Software Engineer"
        />
        <meta name="twitter:site" content="@pixel_arts" />
        <meta name="twitter:creator" content="@pixel_arts" />
        <meta name="twitter:image:src" content="https://bonhomme.lol/meta-og.png" />
        <meta property="og:title" content="Bonhomme - Developer" />
        <meta
          property="og:description"
          content="Maxime Bonhomme - Senior Software Engineer"
        />
        <meta property="og:image" content="https://bonhomme.lol/meta-og.png" />
        <meta property="og:url" content="https://bonhomme.lol/" />
        <meta property="og:site_name" content="Bonhomme" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Maxime Bonhomme",
              jobTitle: "Product-focused Developer",
              url: "https://bonhomme.lol/",
              image: "https://bonhomme.lol/meta-og.png",
              sameAs: [
                "https://github.com/maximebonhomme",
                "https://twitter.com/pixel_arts",
                "https://www.are.na/max-bonhomme",
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
