import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage() {
  const [image, setImage] = useState<string>("");

  // ! 컴포넌트 마운트 시 강아지 이미지 API 호출
  useEffect(() => {
    // * 비동기 함수로 API 데이터 조회 및 상태 업데이트
    const onClickSync = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImage(result.data.message);
    };
    onClickSync();
  }, []);

  return (
    <div>
      <img src={image} />
      {/* <button onClick={onClickSync}>REST_API(SYNC)</button> */}
    </div>
  );
}
