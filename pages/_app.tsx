import { AppProps } from "next/app";
// import "../styles/globals.css";
import * as React from "react";
import { store } from "../src/store";
import { Provider } from "react-redux";
import Head from "next/head";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Brand New Next App</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  ); //...pageProps to spread all props passed thru
};

export default CustomApp;
