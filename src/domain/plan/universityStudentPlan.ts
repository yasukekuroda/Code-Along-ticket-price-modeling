import { Customer, SCHOOL_CATEGORY } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan, Price } from "domain/plan";

export const UniversityStudentPlan: Plan = class {
  static planName(): string {
    return "学生（大・専）";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.schoolCategory === SCHOOL_CATEGORY.University) return true;
    if (customer.schoolCategory === SCHOOL_CATEGORY.VocationalSchool)
      return true;
    if (customer.schoolCategory === SCHOOL_CATEGORY.GraduateSchool) return true;

    return false;
  }

  static price(date: CinemaDate): Price {
    if (date.isCinemaDay()) return new Price(1300);

    return new Price(1500);
  }
};
