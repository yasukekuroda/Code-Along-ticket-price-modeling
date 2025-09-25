import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";

describe("Customer", () => {
  describe("new", () => {
    test("Ageに不正な値が与えられた場合、インスタンス生成に失敗する", () => {
      expect(
        () =>
          new Customer(
            new Age(-1),
            CINEMA_CITIZEN_CATEGORY.Guest,
            DISABILITY_CATEGORY.None,
            SCHOOL_CATEGORY.None,
          ),
      ).toThrow("年齢が不正です");
    });

    test("Ageに正しい値が与えられた場合、インスタンス生成に成功する", () => {
      const customer = new Customer(
        new Age(25),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None,
      );
      expect(customer).toBeInstanceOf(Customer);
    });
  });
});
