import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

export default function Document() {
  const { asPath, locale, locales} = useRouter;
  const l = locale === 'en-US' ? "en" : "es";
  return (
    <Html lang={l}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
