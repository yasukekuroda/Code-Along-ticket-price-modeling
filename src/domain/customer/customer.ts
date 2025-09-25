import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";

export class Customer {
  constructor(
    public readonly age: Age,
    public readonly cinemaCitizenCategory: CINEMA_CITIZEN_CATEGORY,
    public readonly disabilityCategory: DISABILITY_CATEGORY,
    public readonly schoolCategory: SCHOOL_CATEGORY,
  ) {}
}
