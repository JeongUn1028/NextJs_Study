//TODO MoveToPage
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../stores";

const useMoveToPage = (): { onClickMoveToPage: (path: string) => () => void, visitedPage: string } => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string): (() => void) => {
    return (): void => {
      if (path !== "/login") {
        setVisitedPage(path);
      }
      router.push(path);
    };
  }

  return { onClickMoveToPage, visitedPage };
}

export default useMoveToPage;