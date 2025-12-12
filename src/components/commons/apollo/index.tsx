import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

interface IApolloSettingProps {
  children: JSX.Element | JSX.Element[];
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    }),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
