import { CINEMA_CITIZEN_CATEGORY, Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Price } from "domain/plan";
import { Plan } from "domain/plan/plan";

export const CinemaCitizenPlan: Plan = class {
  static readonly MAXIMUM_AGE = 59;
  static planName(): string {
    return "シネマシティズン";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.age.value > this.MAXIMUM_AGE) return false;
    if (customer.cinemaCitizenCategory !== CINEMA_CITIZEN_CATEGORY.Member)
      return false;

    return true;
  }

  static price(date: CinemaDate): Price {
    if (date.isCinemaDay()) return new Price(1300);
    if (date.isWeekDay()) return new Price(1000);
    if (date.isLateShow()) return new Price(1000);

    return new Price(1300);
  }
};
