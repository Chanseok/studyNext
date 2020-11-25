import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.8.5/antd.min.css"
            integrity="sha512-f4gv+zHa7Vs6s7TyEI4R/QWeBUqPXJXFdV5H/3hb3UKPjE0jJ2hVGfFFtD0Wxr6Rw+O49i2C4TBeaoYWRUDCgQ=="
            crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument