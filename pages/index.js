import Head from "next/head"
import Header from "./components/Header"
import CookieStand from "./components/CookieStand"
import Footer from "./components/Footer"

function Home(){
  return(
    <>
    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
      <Header/>
      <CookieStand/>
      <Footer/>
    </>
  )
}

export default Home
