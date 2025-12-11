export default function BoardComponent(props) {
  return (
    <div>
      <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
      title: <input type="text" /> <br />
      contents: <input type="text" /> <br />
      <button>{props.isEdit ? "수정" : "등록"}하기</button>
    </div>
  );
}
