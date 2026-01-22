import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";

// ! TypeScript 기반 게시글 등록 페이지
export default function GraphqlMutationPage() {
  return (
    <div>
      <div>########### Page #########</div>
      <BoardWrite isEdit={false} />
      <div>########### Page #########</div>
    </div>
  );
}
