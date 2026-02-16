import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
interface IApolloSettingProps {
  children: JSX.Element | JSX.Element[];
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
