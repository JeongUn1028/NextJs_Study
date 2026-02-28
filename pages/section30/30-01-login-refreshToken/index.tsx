import { wrapAsync } from "@/src/commons/libraries/asyncFunc";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "@/src/commons/types/generated/types";
import { accessTokenState } from "@/src/components/commons/stores";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

//COMPONENT LoginPage 컴포넌트에서 로그인 성공 시, 받아온 accessToken을 Recoil의 globalState에 저장하기
export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER_EXAMPLE);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  //* 이메일 입력
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  //* 비밀번호 입력
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  //* 로그인 버튼 클릭
  const onClickLogin = async (): Promise<void> => {
    //* 1. 로그인 뮤테이션 날려서 accessToken 받아오기
    try {
      const result = await loginUserExample({
        variables: {
          email,
          password,
        },
      });
      console.log(result.data?.loginUserExample?.accessToken);
      const accessToken = result.data?.loginUserExample?.accessToken;
      //* 1-1. 받아온 accessToken을 globalState에 저장하기 (Recoil)
      if (!accessToken) {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
        return;
      }
      setAccessToken(accessToken);
      //* 1-2. 로그인 성공 페이지로 이동하기
      router.push("/section30/30-01-login-refreshToken-success");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return (
    <div>
      <h1>로그인 페이지</h1>
      {/* 로그인 폼 구현 */}
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={wrapAsync(onClickLogin)}>로그인</button>
    </div>
  );
}
