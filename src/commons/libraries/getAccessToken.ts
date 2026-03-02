import { gql, GraphQLClient } from "graphql-request";
import { IMutation } from "../types/generated/types";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

const getAccessToken = async (): Promise<string> => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result =
      await graphQLClient.request<Pick<IMutation, "restoreAccessToken">>(
        RESTORE_ACCESS_TOKEN
      );
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) {
      const maybeGraphQLError = error as Error & {
        response?: { errors?: Array<{ message?: string }> };
      };
      const message =
        maybeGraphQLError.response?.errors?.[0]?.message ||
        error.message ||
        "토큰 재발급에 실패했습니다.";
      throw new Error(message);
    }
    throw new Error("토큰 재발급에 실패했습니다.");
  }
};

export default getAccessToken;
