import { wrapAsync } from "@/src/commons/libraries/asyncFunc";
import axios from "axios";
import { useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // 게시글 등록 버튼이라고 가정
  const onClickSync = async (): Promise<void> => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log("REST_API(SYNC) 요청이 완료되었습니다.");
    console.log(result);
    setIsSubmitting(false);
  };

  return (
    <div>
      <button
        disabled={isSubmitting}
        onClick={wrapAsync(onClickSync)}
        style={
          !isSubmitting
            ? { backgroundColor: "gray" }
            : { backgroundColor: "blue" }
        }
      >
        REST_API(SYNC)
      </button>
    </div>
  );
}
