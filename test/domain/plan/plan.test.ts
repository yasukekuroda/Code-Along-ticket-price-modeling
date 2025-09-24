import { Plan } from "domain/plan";
import { Age, Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Price } from "domain/plan";

class DummyPlan implements Plan {
  planName(): string {
    return "ダミープラン";
  }
  isAvailable(customer: Customer): boolean {
    return true;
  }
  price(date: CinemaDate): Price {
    return new Price(1000);
  }
}

describe("Plan インターフェイス", () => {
  it("planName, isAvailable, price メソッドが正しく動作する", () => {
    const plan = new DummyPlan();
    expect(plan.planName()).toBe("ダミープラン");

    const customer = {} as Customer;
    expect(plan.isAvailable(customer)).toBe(true);

    const date = {} as CinemaDate;
    expect(plan.price(date)).toBeInstanceOf(Price);
  });
});
