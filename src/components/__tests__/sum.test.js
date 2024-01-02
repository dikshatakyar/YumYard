import { Sum } from "../Sum";

test("test to check the sum", () => {
  const result = Sum(4, 5);
  expect(result).toBe(9);
});
