import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";



const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

//Component 
export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  //FUNC Click the button tag to save the board's _id, title, and writer in localStorage
  const onClickBasket = (basket: IBoard): (() => void) => (): void => {

    const prevBaskets: IBoard[] = JSON.parse(localStorage.getItem("baskets") || "[]");

    //* If the same board is added to the basket, alert "Already in the basket" and do not add it again
    const isExits: IBoard | undefined = prevBaskets.find((prevBasket): boolean => prevBasket._id === basket._id);
    if (isExits) {
      alert("Already in the basket");
      return;
    }
    console.log(basket)
    const baskets = [basket];

    //* If there is already baskets in localStorage, add the new basket to the existing baskets array

    //! Bad code
    delete basket.__typename;


    const newBaskets = [...prevBaskets, ...baskets];

    localStorage.setItem("baskets", JSON.stringify([...newBaskets]));

    //* Use the useEffect to get the baskets from localStorage and set it to the state

  }

  return (
    <div>
      {data?.fetchBoards?.map((el): JSX.Element => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
          <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
          <button id={el._id} onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}
