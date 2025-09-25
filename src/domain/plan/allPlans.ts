import { Plan } from "domain/plan/plan";
import { Plans } from "domain/plan/plans";
import { GeneralPlan } from "domain/plan/generalPlan";
import { CinemaCitizenPlan } from "domain/plan/cinemaCitizenPlan";
import { CinemaCitizenSeniorPlan } from "domain/plan/cinemaCitizenSeniorPlan";

const allPlansArray: Plan[] = [
  GeneralPlan,
  CinemaCitizenPlan,
  CinemaCitizenSeniorPlan,
];

export const allPlans = new Plans(allPlansArray);
