import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>MibTest Pro App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* <Footer /> */}

    </>
  )
}
