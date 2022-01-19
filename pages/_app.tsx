import { AppProps } from "next/app";
// import "../styles/globals.css";
import * as React from "react";
import "../styles/global.css";
import { store } from "../src/store";
import { Provider } from "react-redux";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Adidas</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  ); //...pageProps to spread all props passed thru
};

export default CustomApp;
