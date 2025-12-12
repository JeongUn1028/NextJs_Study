import { IQuery } from "../../../commons/types/generated/types";

export default function Board(props: {
  data: Pick<IQuery, "fetchBoards"> | undefined;
}) {
  return (
    <>
      {props.data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
          <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
        </div>
      ))}
    </>
  );
}
