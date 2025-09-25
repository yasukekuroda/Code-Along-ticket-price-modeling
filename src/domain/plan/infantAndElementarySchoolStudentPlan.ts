import { Customer, SCHOOL_CATEGORY } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan, Price } from "domain/plan";

export const InfantAndElementarySchoolStudentPlan: Plan = class {
  static MINIMUM_AGE = 3;
  static MAXIMUM_AGE = 12;

  static planName(): string {
    return "幼児（3才以上）・小学生";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.age.value < this.MINIMUM_AGE) return false;
    if (customer.age.value > this.MAXIMUM_AGE) return false;

    return true;
  }

  static price(date: CinemaDate): Price {
    return new Price(1000);
  }
};
