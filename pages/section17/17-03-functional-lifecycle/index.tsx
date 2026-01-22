import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  //* ComponentDidMount
  useEffect(() => {
    console.log("컴포넌트가 생성되었습니다.");
  }, []);

  //* ComponentDidMount + ComponentDidUpdate
  useEffect(() => {
    console.log("컴포넌트가 수정되었습니다.");
  }, [count]);

  useEffect(() => {
    //* ComponentWillUnmount
    return () => {
      console.log("컴포넌트가 제거되었습니다.");
      //* 채팅방 나가기
    };
  }, []);

  //* 1. useEffect 합치기
  // useEffect(() => {
  //   console.log("컴포넌트가 생성되었습니다.");

  //   console.log("컴포넌트가 수정되었습니다.");

  //   return () => {
  //     console.log("컴포넌트가 제거되었습니다.");
  //     //* 채팅방 나가기
  //   };
  // }, [count]);

  //! 2. useEffect 잘못된 사용법(1.추가렌더링 2.무한루프)
  // useEffect(() => {
  //   setCount(prev => prev + 1);
  // }, [count]);

  // ! 카운트 증가 함수 - 상태 업데이트
  const onClickCountUp = (): void => {
    console.log(count);
    setCount(count + 1);
  };

  // * 페이지 이동 함수 - 라우터를 통한 네비게이션
  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <div>
      <div>
        Counter
        <div>현재 카운트: {count}</div>
        <button onClick={onClickCountUp}>+</button>
        <button onClick={onClickMove}>나가기</button>
      </div>
    </div>
  );
}
