import '../styles/globals.scss'
import Layout from '../layout'
import Head from 'next/head';


function MyApp(obj) {
  const { Component, pageProps }=obj || {};
  if(!Component){
    return <></>
  }
  return (
    <>
      <Head>
        <title>Cryptocriminals NFT Metaverse - No Face No Case</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
