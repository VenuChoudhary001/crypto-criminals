import '../styles/globals.scss'
import Layout from '../layout'


function MyApp(obj) {
  const { Component, pageProps }=obj || {};
  if(!Component){
    return <></>
  }
  return <>
  <Layout>

  <Component  {...pageProps} />
 
  </Layout>
  </>
}

export default MyApp
