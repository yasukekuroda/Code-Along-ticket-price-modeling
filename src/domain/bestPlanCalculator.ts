import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { allPlans, Plan } from "domain/plan";

export class BestPlanCalculator {
  static calculate(customer: Customer, date: CinemaDate): Plan {
    const availablePlans = allPlans.availablePlans(customer);
    if (availablePlans.count() === 0) {
      throw new Error("利用できるプランがありません");
    }

    return availablePlans.bestPricePlan(date);
  }
}
