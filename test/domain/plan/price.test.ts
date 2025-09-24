import { Price } from "domain/plan";

describe("Price", () => {
  describe("new", () => {
    test("小数値が与えられた場合、エラーになる", () => {
      expect(() => new Price(2500.5)).toThrow("価格が不正です");
    });

    test("0未満の整数が与えられた場合、エラーになる", () => {
      expect(() => new Price(-1)).toThrow("価格が不正です");
    });

    test("30001以上の整数が与えられた場合、エラーになる", () => {
      expect(() => new Price(30001)).toThrow("価格が不正です");
    });

    test("0以上30000以下の整数が与えられた場合、エラーにならない", () => {
      expect(new Price(0)).toBeInstanceOf(Price);
      expect(new Price(30000)).toBeInstanceOf(Price);
    });
  });
});
