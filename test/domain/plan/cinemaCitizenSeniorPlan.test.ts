import { addBusinessDays, isFirstDayOfMonth, nextSaturday } from "date-fns";
import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";
import { CinemaCitizenSeniorPlan } from "domain/plan";

describe("CinemaCitizenSeniorPlan", () => {
  describe(".isAvailable", () => {
    test("シネマシティズン会員かつ60歳以上の場合、trueを返す", () => {
      const customer = new Customer(
        new Age(60),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None,
      );
      expect(CinemaCitizenSeniorPlan.isAvailable(customer)).toBe(true);
    });

    test("シネマシティズン会員ではない場合、falseを返す", () => {
      const customer = new Customer(
        new Age(60),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None,
      );
      expect(CinemaCitizenSeniorPlan.isAvailable(customer)).toBe(false);
    });
    test("59歳未満の場合、falseを返す", () => {
      const customer = new Customer(
        new Age(59),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None,
      );

      expect(CinemaCitizenSeniorPlan.isAvailable(customer)).toBe(false);
    });
  });

  describe(".price", () => {
    describe("映画の日", () => {
      test("平日20時までの場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T19:59:59.000+09:00");
        expect(CinemaCitizenSeniorPlan.price(cinemaWeekday).value).toBe(1000);
      });

      test("平日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T20:00:00.000+09:00");
        expect(CinemaCitizenSeniorPlan.price(cinemaWeekday).value).toBe(1000);
      });

      test("土日20時までの場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T19:59:59.000+09:00");
        expect(CinemaCitizenSeniorPlan.price(cinemaWeekday).value).toBe(1000);
      });

      test("土日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T20:00:00.000+09:00");
        expect(CinemaCitizenSeniorPlan.price(cinemaWeekday).value).toBe(1000);
      });
    });

    describe("映画の日以外", () => {
      test("平日20時までの場合、1000円を返す", () => {
        const weekday = addBusinessDays(new Date(), 1);
        if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);
        weekday.setHours(19, 59, 59);
        const cinemaWeekday = new CinemaDate(weekday.toISOString());
        expect(CinemaCitizenSeniorPlan.price(cinemaWeekday).value).toBe(1000);
      });

      test("平日20時以降の場合、1000円を返す", () => {
        const weekday = addBusinessDays(new Date(), 1);
        if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);
        weekday.setHours(20, 0, 0);
        const cinemaWeekday = new CinemaDate(weekday.toISOString());
        expect(CinemaCitizenSeniorPlan.price(cinemaWeekday).value).toBe(1000);
      });

      test("土日20時までの場合、1000円を返す", () => {
        const saturday = nextSaturday(new Date());
        if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);
        saturday.setHours(19, 59, 59);
        const cinemaSaturday = new CinemaDate(saturday.toISOString());
        expect(CinemaCitizenSeniorPlan.price(cinemaSaturday).value).toBe(1000);
      });

      test("土日20時以降の場合、1000円を返す", () => {
        const saturday = nextSaturday(new Date());
        if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);
        saturday.setHours(20, 0, 0);
        const cinemaSaturday = new CinemaDate(saturday.toISOString());
        expect(CinemaCitizenSeniorPlan.price(cinemaSaturday).value).toBe(1000);
      });
    });
  });
});
