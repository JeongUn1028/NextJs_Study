import { IQuery } from "@/src/commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";
import loginCheck from "@/src/components/commons/hocs/loginCheck";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`
function LoginPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  //* 1. Check login status using accessToken stored in localStorage

  return (
    <div>
      <h1>로그인 성공 페이지</h1>
      {data?.fetchUserLoggedIn.name}님 환영합니다!
    </div>
  );

}

export default loginCheck(LoginPage);