import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan, Plans, allPlans, DisabilityUnderHighSchoolStudentPlan } from "domain/plan";

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
      CINEMA_CITIZEN_CATEGORY.Guest,
      DISABILITY_CATEGORY.None,
      SCHOOL_CATEGORY.None,
    );
    test("plansが空の場合は0を返す", () => {
      expect(new Plans([]).count()).toBe(0);
    });

    test("plansが空ではない場合は利用可能なplansの数を返す", () => {
      const availablePlans = allPlans.availablePlans(customer);
      expect(availablePlans.count()).toBe(1);
      expect(availablePlans.availablePlans(customer).count()).toBe(1);
    });
  });

  describe("bestPricePlan", () => {
    test("plansが空の場合は例外を投げる", () => {
      expect(() => new Plans([]).bestPricePlan(new CinemaDate())).toThrow();
    });

    test("Plansが空ではない場合は最も安いPlanを返す", () => {
      expect(allPlans.bestPricePlan(new CinemaDate())).toBe(
        DisabilityUnderHighSchoolStudentPlan,
      );
    });
  });
});
