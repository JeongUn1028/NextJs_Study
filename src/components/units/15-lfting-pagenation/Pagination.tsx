import { MouseEvent, useState } from "react";

export default function Pagination(prop: {
  refetch: (variables: { page: number }) => void;
  lastPage: number;
}) {
  const { refetch, lastPage } = prop;
  const [startPage, setStartPage] = useState<number>(1);

  // ! 특정 페이지로 이동하는 함수
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };
  // * 이전 페이지 그룹으로 이동
  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };
  // * 다음 페이지 그룹으로 이동
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
