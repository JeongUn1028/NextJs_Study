import { IQuery } from "@/src/commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`
//TODO : localStorage에 저장된 AccessToken을 이용하여 로그인 성공 페이지 구현
export default function LoginPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const router = useRouter();
  //* 1. Check login status using accessToken stored in localStorage
  useEffect((): void => {
    //* 1-1. login Page 로 return
    if (!localStorage.getItem("accessToken")) {
      alert("로그인이 필요합니다.");
      router.push("/section23/23-03-login-check");
      return;
    }
  }, [router]);
  return (
    <div>
      <h1>로그인 성공 페이지</h1>
      {data?.fetchUserLoggedIn.name}님 환영합니다!
    </div>
  );

}