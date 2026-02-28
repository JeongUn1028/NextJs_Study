import { wrapAsync } from "@/src/commons/libraries/asyncFunc";
import { gql, useApolloClient } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
//TODO : 로그인 성공 페이지 구현
export default function LoginPage(): JSX.Element {
  //* 1. Page 접속 시,자동으로 로그인한 유저의 정보를 받아와서 환영메세지 띄우기
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  //* 2. button 클릭 시, 로그인한 유저의 정보를 받아와서 환영메세지 띄우기
  // const [fetchUserLoggedIn, { data: lazyData }] =
  //   useLazyQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  //* 3. Axios처럼 사용하는 방법(data는 글로벌 스테이트에 저장)
  // const client = useApolloClient();
  // client.query({ query: FETCH_USER_LOGGED_IN }).then((response): void => {
  //   console.log(response.data);
  // });

  const client = useApolloClient();

  const onClickFetchUser = async (): Promise<void> => {
    //TODO useApolloClient()로 FETCH_USER_LOGGED_IN 쿼리 요청하기
    const result = await client.query({ query: FETCH_USER_LOGGED_IN });
    console.log(result.data);
  };
  return (
    <div>
      <h1>로그인 성공 페이지</h1>
      {/* {data?.fetchUserLoggedIn.name}님 환영합니다! */}
      <button onClick={wrapAsync(onClickFetchUser)}>Click!</button>
    </div>
  );
}
