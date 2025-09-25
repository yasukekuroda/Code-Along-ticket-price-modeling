import {
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan, Price } from "domain/plan";

export const DisabilityPlan: Plan = class {
  static planName(): string {
    return "障がい者（学生以上）";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.disabilityCategory === DISABILITY_CATEGORY.None) return false;
    if (customer.schoolCategory === SCHOOL_CATEGORY.JuniorHighSchool)
      return false;
    if (customer.schoolCategory === SCHOOL_CATEGORY.SeniorHighSchool)
      return false;

    return true;
  }

  static price(date: CinemaDate): Price {
    return new Price(1000);
  }
};
