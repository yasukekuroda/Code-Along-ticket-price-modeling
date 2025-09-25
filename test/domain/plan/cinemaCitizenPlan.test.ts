import { addBusinessDays, isFirstDayOfMonth, nextSaturday } from "date-fns";

import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";
import { CinemaCitizenPlan } from "domain/plan";

describe("CinemaCitizenPlan", () => {
  describe(".isAvailable", () => {
    test("シネマシティズン会員かつ59歳未満の場合、trueを返す", () => {
      const customer = new Customer(
        new Age(59),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None,
      );
      expect(CinemaCitizenPlan.isAvailable(customer)).toBe(true);
    });

    test("シネマシティズン会員ではない場合、falseを返す", () => {
      const customer = new Customer(
        new Age(60),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None,
      );
      expect(CinemaCitizenPlan.isAvailable(customer)).toBe(false);
    });
    test("60歳以上の場合、falseを返す", () => {
      const customer = new Customer(
        new Age(60),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None,
      );

      expect(CinemaCitizenPlan.isAvailable(customer)).toBe(false);
    });
  });

  describe(".price", () => {
    describe("映画の日", () => {
      test("平日20時までの場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T19:59:59.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });

      test("平日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T20:00:00.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });

      test("土日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T19:59:59.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1300);
      });

      test("土日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T20:00:00.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });
    });

    describe("映画の日以外", () => {
      test("平日20時までの場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-24T19:59:59.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });

      test("平日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-24T20:00:00.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });

      test("土日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-27T19:59:59.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1300);
      });

      test("土日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-27T20:00:00.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });
    });
  });
});
