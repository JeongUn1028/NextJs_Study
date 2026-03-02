import { useRouter } from "next/router";
import { useEffect } from "react";

const imgArray = [];

export default function ImagePreloadPage(): JSX.Element {
  const router = useRouter();
  const onClickMove = (): void => {
    //TODO : 페이지 이동하기
    router.push("/section31/31-09-image-preload-moved");
  };
  useEffect((): void => {
    const img = new Image();
    img.src =
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdGlvbjMxJTIwMTAtbW9tZW50JTIwY2FybmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";
    img.onload = (): void => {
      imgArray.push(img);
      console.log("이미지 로딩 완료");
    };
  }, []);
  return (
    <div>
      <h1>이미지 프리로드 연습하기</h1>
      <button onClick={onClickMove}>페이지 이동</button>
    </div>
  );
}
