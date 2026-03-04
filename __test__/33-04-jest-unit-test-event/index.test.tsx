import UnitTestPage from "@/pages/section33/33-04-jest-unit-test-event";
import { expect, it } from "@jest/globals";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

it("buttonClick test", (): void => {
  render(<UnitTestPage />);

  fireEvent.click(screen.getByRole("count-button"));
  expect(screen.getByRole("count")).toHaveTextContent("1");
});
