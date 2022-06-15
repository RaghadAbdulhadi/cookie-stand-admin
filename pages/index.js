import Head from "next/head";
import Header from "./components/Header";
import Main from "./components/Main";

import Footer from "./components/Footer";
import { useState } from "react";

function Home(){  
// const [reply, setReply] = useState("Information will appear when you create a Cookie Stand!")
//   const form = document.getElementById('form');
//   form.addEventListener('submit', callbackFunction);
  return(
    <>
    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
      <Header/>
      <Main />
      <Footer/>
    </>
  )
}

export default Home
