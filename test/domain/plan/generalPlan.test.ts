import { addBusinessDays, isFirstDayOfMonth, nextSaturday } from "date-fns";

import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";
import { GeneralPlan } from "domain/plan";

describe("GeneralPlan", () => {
  describe(".isAvailable", () => {
    test("trueを返す", () => {
      const customer = new Customer(
        new Age(20),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None,
      );
      expect(GeneralPlan.isAvailable(customer)).toBe(true);
    });
  });

  describe(".price", () => {
    describe("映画の日", () => {
      test("平日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T19:59:59.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1300);
      });

      test("平日20時以降の場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T20:00:00.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1300);
      });

      test("土日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T19:59:59.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1300);
      });

      test("土日20時以降の場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T20:00:00.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1300);
      });
    });

    describe("映画の日以外", () => {
      test("平日20時までの場合、2000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-24T19:59:59.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(2000);
      });

      test("平日20時以降の場合、1500円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-24T20:00:00.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1500);
      });

      test("土日20時までの場合、2000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-27T19:59:59.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(2000);
      });

      test("土日20時以降の場合、1500円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-27T20:00:00.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1500);
      });
    });
  });
});
