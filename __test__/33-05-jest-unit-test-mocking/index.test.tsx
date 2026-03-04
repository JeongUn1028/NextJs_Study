//TODO 1. 렌더링
//TODO 2. 인풋창에 값 입력
//TODO 3. 버튼 클릭
//TODO 4. API 요청이 제대로 되는지 (모킹)
//TODO 4-1. 가짜 API 만들기
//TODO 4-2. 가짜 API로 요청 보내기
//TODO 5. 페이지로 이동

import { gql } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import { expect, it, jest } from "@jest/globals";
import "@testing-library/jest-dom/jest-globals";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const pushMock = jest.fn();
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

it("게시글 등록이 잘 되는지 테스트하기", async (): Promise<void> => {
  const mockedUseRouter = require("next/router").useRouter as jest.Mock;
  mockedUseRouter.mockReturnValue({
    push: pushMock,
  });

  const { default: StaticRoutingMovedPage } =
    await import("@/pages/section33/33-05-jest-unit-test-mocking");

  const mocks = [
    {
      request: {
        query: CREATE_BOARD,
        variables: {
          createBoardInput: {
            writer: "작성자",
            title: "제목",
            contents: "내용",
            password: "1234",
          },
        },
      },
      result: {
        data: {
          createBoard: {
            _id: "mockedId",
            writer: "작성자",
            title: "제목",
            contents: "내용",
            __typename: "Board",
          },
        },
      },
    },
  ];

  //TODO 1. 렌더링
  render(
    <MockedProvider mocks={mocks}>
      <StaticRoutingMovedPage />
    </MockedProvider>
  );

  //TODO 2. 인풋창에 값 입력
  fireEvent.change(screen.getByRole("writer-input"), {
    target: { value: "작성자" },
  });
  fireEvent.change(screen.getByRole("title-input"), {
    target: { value: "제목" },
  });
  fireEvent.change(screen.getByRole("contents-input"), {
    target: { value: "내용" },
  });

  //TODO 3. 버튼 클릭
  fireEvent.click(screen.getByRole("submit-button"));

  //TODO 4-2. 가짜 API로 요청 보내기

  //TODO 5. 페이지로 이동
  await waitFor((): void => {
    expect(pushMock).toHaveBeenCalledWith("/section23/23-02-board/mockedId");
  });
});
