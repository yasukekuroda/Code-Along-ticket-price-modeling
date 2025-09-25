import {
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan, Price } from "domain/plan";

export const DisabilityUnderHighSchoolStudentPlan: Plan = class {
  static planName(): string {
    return "障がい者（高校以下）";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.disabilityCategory === DISABILITY_CATEGORY.None) return false;
    if (customer.schoolCategory === SCHOOL_CATEGORY.JuniorHighSchool)
      return true;
    if (customer.schoolCategory === SCHOOL_CATEGORY.SeniorHighSchool)
      return true;

    return false;
  }

  static price(date: CinemaDate): Price {
    return new Price(900);
  }
};
