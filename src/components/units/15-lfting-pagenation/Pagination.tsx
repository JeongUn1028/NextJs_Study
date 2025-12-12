import { MouseEvent, useState } from "react";

export default function Pagination(prop: {
  refetch: (variables: { page: number }) => void;
  lastPage: number;
}) {
  const { refetch, lastPage } = prop;
  const [startPage, setStartPage] = useState<number>(1);

  //* go to page
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };
  //* go to prevPage
  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };
  //* go to nextPage
  const onClickNext = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <>
      <span onClick={onClickPrev}>이전</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              id={String(index + startPage)}
              onClick={onClickPage}
              key={index + startPage}
            >
              {index + startPage}
            </span>
          ),
      )}
      <span onClick={onClickNext}>다음</span>
    </>
  );
}
