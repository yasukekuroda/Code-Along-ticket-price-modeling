import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan, Price } from "domain/plan";

export const GeneralPlan: Plan = class {
  static planName(): string {
    return "一般";
  }

  static isAvailable(customer: Customer): boolean {
    return true;
  }

  static price(date: CinemaDate): Price {
    if (date.isCinemaDay()) return new Price(1300);
    if (date.isLateShow()) return new Price(1500);

    return new Price(2000);
  }
};
