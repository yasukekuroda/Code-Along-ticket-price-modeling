import { CinemaCitizenPlan } from "domain/plan/cinemaCitizenPlan";
import { CinemaCitizenSeniorPlan } from "domain/plan/cinemaCitizenSeniorPlan";
import { GeneralPlan } from "domain/plan/generalPlan";
import { SeniorPlan } from "domain/plan/seniorPlan";
import { UniversityStudentPlan } from "domain/plan/universityStudentPlan";
import { HighSchoolStudentPlan } from "domain/plan/highSchoolStudentPlan";
import { InfantAndElementarySchoolStudentPlan } from "domain/plan/infantAndElementarySchoolStudentPlan";
import { DisabilityPlan } from "domain/plan/disabilityPlan";
import { DisabilityUnderHighSchoolStudentPlan } from "domain/plan/disabilityUnderHighSchoolStudentPlan";
import { Plan } from "domain/plan/plan";
import { Plans } from "domain/plan/plans";

const allPlansArray: Plan[] = [
  CinemaCitizenPlan,
  CinemaCitizenSeniorPlan,
  GeneralPlan,
  SeniorPlan,
  UniversityStudentPlan,
  HighSchoolStudentPlan,
  InfantAndElementarySchoolStudentPlan,
  DisabilityPlan,
  DisabilityUnderHighSchoolStudentPlan,
];

export const allPlans = new Plans(allPlansArray);
