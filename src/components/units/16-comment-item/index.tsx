import { useState } from "react";

interface ICommentItemProps {
  key: string;
  el: {
    _id: string;
    title: string;
  };
}

export default function CommentItem({ key, el }: ICommentItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  // * 댓글 수정 모드 토글 함수
  const onClickEdit = (): void => {
    setIsEdit(true);
  };
  return (
    <div>
      <div key={key}>
        {isEdit ? (
          <>
            <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
            <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
            <button onClick={onClickEdit}>edit</button>
          </>
        ) : (
          <>
            <input type="text" key={el._id} />
          </>
        )}
      </div>
    </div>
  );
}
