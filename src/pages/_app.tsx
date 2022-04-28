import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "../state-management";

import "../styles/app.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>DRCG&nbsp;Properties</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

export default MyApp;
