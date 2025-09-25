import { CINEMA_CITIZEN_CATEGORY, Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Price } from "domain/plan";
import { Plan } from "domain/plan/plan";

export const CinemaCitizenSeniorPlan: Plan = class {
  static readonly MINIMUM_AGE = 60;
  static planName(): string {
    return "シネマシティズン（60才以上）";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.age.value < this.MINIMUM_AGE) return false;
    if (customer.cinemaCitizenCategory !== CINEMA_CITIZEN_CATEGORY.Member)
      return false;

    return true;
  }

  static price(date: CinemaDate): Price {
    return new Price(1000);
  }
};
