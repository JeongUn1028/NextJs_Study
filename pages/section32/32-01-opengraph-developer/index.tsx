//* 오픈그래프 타입을 받았을때 보여주는 페이지

import axios from "axios";

export default function OpenGraphDeveloperPage(): JSX.Element {
  const onClickEnter = async (): Promise<void> => {
    alert("채팅 입력 후 Enter 치기");
    //TODO: 데이터에 주소가 들어왔는지 체크
    //TODO: 해당 주소로 스크래핑하기
    const result = await axios.get(
      "http://localhost:3000/section32/32-01-opengraph-provider"
    );
    console.log(result.data);

    //TODO: 메타태그에서 오픈그래프 찾기
    console.log(
      result.data
        .split("<meta")
        .filter((el: string): boolean => el.includes("og:"))
    );
  };
  return (
    <div>
      <div>오픈그래프 개발자 페이지</div>
      <button onClick={onClickEnter}>채팅 입력 후 Enter 치기</button>
    </div>
  );
}
