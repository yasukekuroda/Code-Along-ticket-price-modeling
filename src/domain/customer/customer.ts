import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";

export class Customer {
  constructor(
    private readonly age: Age,
    private readonly cinemaCitizenCategory: CINEMA_CITIZEN_CATEGORY,
    private readonly disabilityCategory: DISABILITY_CATEGORY,
    private readonly schoolCategory: SCHOOL_CATEGORY,
  ) {}
}
