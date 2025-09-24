import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Price } from "domain/plan";

export interface Plan {
  planName(): string;
  isAvailable(customer: Customer): boolean;
  price(date: CinemaDate): Price;
}
