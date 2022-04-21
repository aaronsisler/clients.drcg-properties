import React from "react";
import App from "next/app";
import Head from "next/head";
import "../styles/app.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>DRCG&nbsp;Properties</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
