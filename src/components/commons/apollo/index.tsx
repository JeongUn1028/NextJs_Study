import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
interface IApolloSettingProps {
  children: JSX.Element | JSX.Element[];
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codecamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
