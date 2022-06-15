import "../styles/globals.css";
import React from "react";

import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";

import { client } from "../graphql/client";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
