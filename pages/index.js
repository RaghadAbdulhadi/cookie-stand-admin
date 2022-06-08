import Head from "next/head";
import Header from "./components/Header";
import Form from "./components/Form";
import CookieStand from "./components/CookieStand";
import Footer from "./components/Footer";
// import { useState } from "react";

function Home(){  
  return(
    <>
    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
      <Header/>
      <Form/>
      <CookieStand/>
      <Footer/>
    </>
  )
}

export default Home
