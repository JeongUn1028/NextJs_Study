import getAccessToken from "@/src/commons/libraries/getAccessToken";
import {
  ApolloClient,
  ApolloLink,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { ApolloProvider } from "@apollo/client/react";
// @ts-expect-error - apollo-upload-client lacks TypeScript definitions for .mjs
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../stores";

interface IApolloSettingProps {
  children: JSX.Element | JSX.Element[];
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const accessTokenLoadable = useRecoilValueLoadable(
    restoreAccessTokenLoadable
  );
  // const localAccessToken =
  //   typeof window !== "undefined"
  //     ? localStorage.getItem("accessToken") || ""
  //     : "";

  //* image upload을 위해 apollo-upload-client의 createUploadLink 사용
  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });
  useEffect((): void => {
    accessTokenLoadable.toPromise().then((newAccessToken): void => {
      setAccessToken(newAccessToken);
    });
  }, []);
  //* error handling을 위해 ApolloLink 사용
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    //* 1. error catch
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        //* 1-1. 에러 중 UNAUTHENTICATED(인증 실패) 에러인 경우
        if (err.extensions?.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken): string => {
              setAccessToken(newAccessToken);
              //* 1-2. 재발급 받은 accessToken으로 실패했던 쿼리 재요청하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
              return newAccessToken;
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
    //* 2. refreshToken 재발급 받는 로직
    //* 3. 재발급 받은 accessToken으로 직전 실패했던 쿼리 재요청하기
    return undefined;
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
