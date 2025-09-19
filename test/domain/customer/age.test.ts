import { Age } from "domain/customer";

describe("Age", () => {
  describe("new", () => {
    test("小数値が与えられた場合、エラーになる", () => {
      expect(() => new Age(25.5)).toThrow("年齢が不正です");
    });

    test("0未満の整数が与えられた場合、エラーになる", () => {
      expect(() => new Age(-1)).toThrow("年齢が不正です");
    });

    test("201以上の整数が与えられた場合、エラーになる", () => {
      expect(() => new Age(201)).toThrow("年齢が不正です");
    });

    test("0以上200以下の整数が与えられた場合、エラーにならない", () => {
      expect(new Age(0)).toBeInstanceOf(Age);
      expect(new Age(200)).toBeInstanceOf(Age);
    });
  });
});
