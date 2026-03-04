import add from "@/pages/section33/33-01-jest";
import { expect, it } from "@jest/globals";

it("adds two numbers correctly", (): void => {
  expect(add(1, 2)).toBe(3);
});

//* test 그룹 만들기
// describe("test group", () => {
//   it("adds two numbers correctly", () => {
//     expect(add(1, 2)).toBe(3);
//   });
// })
