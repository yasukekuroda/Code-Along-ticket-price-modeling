import { Plans } from "domain/plan";

describe("Plans", () => {
  describe("new", () => {
    test("plansが空の場合は0を返す", () => {
      expect(new Plans([]).count()).toBe(0);
    });
  });
});
