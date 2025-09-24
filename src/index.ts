import { BestPlanCalculator } from "domain/bestPlanCalculator";
import { Age, Customer } from "domain/customer";
import { CinemaDate } from "domain/date";

const customer = new Customer(new Age(20));
const date = new CinemaDate();
const bestPlan = BestPlanCalculator.calculate(customer, date);

console.log(
  `最適なプランは「${bestPlan.planName()}」です。
    現在日時は${date.toLocaleString()}で、料金は${
      bestPlan.price(date).getValue
    }円です。`,
);
