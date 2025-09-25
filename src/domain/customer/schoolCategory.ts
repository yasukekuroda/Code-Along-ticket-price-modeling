export const SCHOOL_CATEGORY = {
  JuniorHighSchool: "juniorHighSchool", // 中学校
  SeniorHighSchool: "seniorHighSchool", // 高校
  VocationalSchool: "vocationalSchool", // 専門学校
  University: "university", // 大学
  GraduateSchool: "graduateSchool", // 大学院

  None: "none",
} as const;

export type SCHOOL_CATEGORY =
  (typeof SCHOOL_CATEGORY)[keyof typeof SCHOOL_CATEGORY];
