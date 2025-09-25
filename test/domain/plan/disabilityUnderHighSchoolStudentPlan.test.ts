import { addBusinessDays, isFirstDayOfMonth, nextSaturday } from "date-fns";
import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";
import { DisabilityUnderHighSchoolStudentPlan } from "domain/plan";

describe("DisabilityUnderHighSchoolStudentPlan", () => {
  describe(".isAvailable", () => {
    describe("障がい者手帳を持つ", () => {
      test("高校生未満ではない場合、falseを返す", () => {
        const customer = new Customer(
          new Age(2),
          CINEMA_CITIZEN_CATEGORY.Guest,
          DISABILITY_CATEGORY.Handicapped,
          SCHOOL_CATEGORY.University,
        );
        expect(DisabilityUnderHighSchoolStudentPlan.isAvailable(customer)).toBe(
          false,
        );
      });
      test("高校生未満の場合、trueを返す", () => {
        const customer = new Customer(
          new Age(2),
          CINEMA_CITIZEN_CATEGORY.Guest,
          DISABILITY_CATEGORY.Handicapped,
          SCHOOL_CATEGORY.SeniorHighSchool,
        );
        expect(DisabilityUnderHighSchoolStudentPlan.isAvailable(customer)).toBe(
          true,
        );
      });
    });
    describe("障がい者手帳を持たない", () => {
      test("常に、falseを返す", () => {
        const customer = new Customer(
          new Age(2),
          CINEMA_CITIZEN_CATEGORY.Guest,
          DISABILITY_CATEGORY.None,
          SCHOOL_CATEGORY.SeniorHighSchool,
        );
        expect(DisabilityUnderHighSchoolStudentPlan.isAvailable(customer)).toBe(
          false,
        );
      });
    });
  });

  describe(".price", () => {
    describe("映画の日", () => {
      test("平日20時までの場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T19:59:59.000+09:00");
        expect(
          DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(900);
      });

      test("平日20時以降の場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T20:00:00.000+09:00");
        expect(
          DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(900);
      });

      test("土日20時までの場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T19:59:59.000+09:00");
        expect(
          DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(900);
      });

      test("土日20時以降の場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T20:00:00.000+09:00");
        expect(
          DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(900);
      });
    });

    describe("映画の日以外", () => {
      test("平日20時までの場合、900円を返す", () => {
        const weekday = addBusinessDays(new Date(), 1);
        if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);
        weekday.setHours(19, 59, 59);
        const cinemaWeekday = new CinemaDate(weekday.toISOString());
        expect(
          DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(900);
      });

      test("平日20時以降の場合、900円を返す", () => {
        const weekday = addBusinessDays(new Date(), 1);
        if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);
        weekday.setHours(20, 0, 0);
        const cinemaWeekday = new CinemaDate(weekday.toISOString());
        expect(
          DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(900);
      });

      test("土日20時までの場合、900円を返す", () => {
        const saturday = nextSaturday(new Date());
        if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);
        saturday.setHours(19, 59, 59);
        const cinemaSaturday = new CinemaDate(saturday.toISOString());
        expect(
          DisabilityUnderHighSchoolStudentPlan.price(cinemaSaturday).value,
        ).toBe(900);
      });

      test("土日20時以降の場合、900円を返す", () => {
        const saturday = nextSaturday(new Date());
        if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);
        saturday.setHours(20, 0, 0);
        const cinemaSaturday = new CinemaDate(saturday.toISOString());
        expect(
          DisabilityUnderHighSchoolStudentPlan.price(cinemaSaturday).value,
        ).toBe(900);
      });
    });
  });
});
