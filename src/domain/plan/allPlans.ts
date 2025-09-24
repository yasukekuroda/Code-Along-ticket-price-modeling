import { Plan } from "domain/plan/plan";
import { Plans } from "domain/plan/plans";

const allPlansArray: Plan[] = [];

export const allPlans = new Plans(allPlansArray);
