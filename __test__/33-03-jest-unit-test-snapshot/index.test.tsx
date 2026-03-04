import UnitTestPage from "@/pages/section33/33-03-jest-unit-test-snapshot";
import { expect, it } from "@jest/globals";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

it("snapshot test", (): void => {
  const { container } = render(<UnitTestPage />);
  expect(container).toMatchSnapshot();
  // const myText = screen.getByText("유닛 테스트 페이지");
  // expect(myText).toBeInTheDocument();
  // const myInput = screen.getByRole("textbox");
  // expect(myInput).toBeInTheDocument();
  // const myButton = screen.getByRole("button", { name: "등록하기" });
  // expect(myButton).toBeInTheDocument();
});
