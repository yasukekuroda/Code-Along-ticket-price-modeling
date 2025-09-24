import { Age, Customer } from "domain/customer";

describe("Customer", () => {
  describe("new", () => {
    test("Ageに不正な値が与えられた場合、インスタンス生成に失敗する", () => {
      expect(() => new Customer(new Age(-1))).toThrow("年齢が不正です");
    });

    test("Ageに正しい値が与えられた場合、インスタンス生成に成功する", () => {
      expect(new Customer(new Age(25))).toBeInstanceOf(Customer);
    });
  });
});
