import { Customer, SCHOOL_CATEGORY } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan, Price } from "domain/plan";

export const HighSchoolStudentPlan: Plan = class {
  static planName(): string {
    return "中・高校生";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.schoolCategory === SCHOOL_CATEGORY.JuniorHighSchool)
      return true;
    if (customer.schoolCategory === SCHOOL_CATEGORY.SeniorHighSchool)
      return true;

    return false;
  }

  static price(date: CinemaDate): Price {
    return new Price(1000);
  }
};
