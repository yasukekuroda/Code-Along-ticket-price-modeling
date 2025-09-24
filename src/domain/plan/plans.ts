import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan";

export class Plans {
  constructor(private readonly plans: Plan[]) {}

  count(): number {
    return this.plans.length;
  }

  availablePlans(customer: Customer): Plans {
    const availablePlans = this.plans.filter((plan: Plan) => {
      plan.isAvailable(customer);
    });

    return new Plans(availablePlans);
  }

  bestPricePlan(date: CinemaDate): Plan {
    return this.plans.reduce((prev, current) => {
      return prev.price(date).getValue < current.price(date).getValue
        ? prev
        : current;
    });
  }
}
