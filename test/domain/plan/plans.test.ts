import { Age, Customer } from "domain/customer";
import { Plan, Plans, allPlans } from "domain/plan";

describe("Plans", () => {
  describe("count", () => {
    test("plansが空の場合は0を返す", () => {
      expect(new Plans([]).count()).toBe(0);
    });

    test("plansが空ではない場合はplansの数を返す", () => {
      expect(new Plans([{} as Plan]).count()).toBe(1);
    });
  });

  describe("availablePlans", () => {
    const customer = new Customer(
      new Age(30),
    );

    test("plansが空の場合は0を返す", () => {
      expect(new Plans([]).availablePlans(customer).count()).toBe(0);
    });

    test("plansが空ではない場合は利用可能なplansの数を返す", () => {
      const availablePlans = allPlans.availablePlans(customer);
      expect(availablePlans.count()).toBe(0);
      expect(availablePlans.availablePlans(customer).count()).toBe(0);
    });
  });
});
