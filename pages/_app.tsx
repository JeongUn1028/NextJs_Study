import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://main-example.codebootcamp.co.kr/graphql",
    }),
    cache: new InMemoryCache(),
  });

  return (
    <div>
      <div>====================== _app.js =====================</div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <div>====================== _app.js =====================</div>
    </div>
  );
}
