import { IQuery } from "@/src/commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`
//TODO : 로그인 성공 페이지 구현
export default function LoginPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return (
    <div>
      <h1>로그인 성공 페이지</h1>
      {data?.fetchUserLoggedIn.name}님 환영합니다!
    </div>
  );

}