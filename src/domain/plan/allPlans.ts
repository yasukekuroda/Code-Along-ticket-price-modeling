import { CinemaCitizenPlan } from "domain/plan/cinemaCitizenPlan";
import { CinemaCitizenSeniorPlan } from "domain/plan/cinemaCitizenSeniorPlan";
import { GeneralPlan } from "domain/plan/generalPlan";
import { Plan } from "domain/plan/plan";
import { Plans } from "domain/plan/plans";
import { SeniorPlan } from "domain/plan/seniorPlan";

const allPlansArray: Plan[] = [
  GeneralPlan,
  CinemaCitizenPlan,
  SeniorPlan,
  CinemaCitizenSeniorPlan,
];

export const allPlans = new Plans(allPlansArray);
