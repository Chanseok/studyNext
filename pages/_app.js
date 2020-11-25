// import 'antd/dist/antd.css';
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App Demo</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
