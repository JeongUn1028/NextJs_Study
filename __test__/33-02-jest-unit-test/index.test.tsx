import UnitTestPage from "@/pages/section33/33-02-jest-unit-test";
import { expect, it } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

it("renders the unit test page", (): void => {
  render(<UnitTestPage />);
  const myText = screen.getByText("유닛 테스트 페이지");
  expect(myText).toBeInTheDocument();
  const myInput = screen.getByRole("textbox");
  expect(myInput).toBeInTheDocument();
  const myButton = screen.getByRole("button", { name: "등록하기" });
  expect(myButton).toBeInTheDocument();
});
