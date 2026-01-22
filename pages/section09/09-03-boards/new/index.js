import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";

// ! 게시글 등록 단계 페이지
export default function GraphqlMutationPage() {
  return (
    <div>
      <div>########### Page #########</div>
      <BoardWrite isEdit={false} />
      <div>########### Page #########</div>
    </div>
  );
}
