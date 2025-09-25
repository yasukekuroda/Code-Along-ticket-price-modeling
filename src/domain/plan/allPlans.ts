import { Plan } from "domain/plan/plan";
import { Plans } from "domain/plan/plans";
import { GeneralPlan } from "domain/plan/generalPlan";

const allPlansArray: Plan[] = [GeneralPlan];

export const allPlans = new Plans(allPlansArray);
