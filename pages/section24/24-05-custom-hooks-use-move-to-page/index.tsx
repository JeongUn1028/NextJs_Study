import useMoveToPage from "@/src/components/commons/hooks/useMoveToPage";

function CustomHooksUseMoveToPage(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <h1>커스텀 훅 - useMoveToPage</h1>
      <button onClick={onClickMoveToPage("/boards")}>Move to Boards</button>
      <button onClick={onClickMoveToPage("/market")}>Move to Market</button>
      <button onClick={onClickMoveToPage("/mypage")}>Move to MyPage</button>
    </>
  );
}

export default CustomHooksUseMoveToPage;
