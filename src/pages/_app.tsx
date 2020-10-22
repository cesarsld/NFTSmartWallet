// import App from 'next/app'
import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from "../lib/theme";
import Head from "next/head";

// Use at the root of your app

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Head>
        <title>YGG | NFT Smart Wallet</title>
        <style>@import url('https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap');</style>
      </Head>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
