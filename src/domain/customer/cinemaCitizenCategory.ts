export const CINEMA_CITIZEN_CATEGORY = {
  Member: "member",
  Guest: "guest",
} as const;

console.log("🚀 ~ const:", CINEMA_CITIZEN_CATEGORY);
console.log("🚀 ~ const:", typeof CINEMA_CITIZEN_CATEGORY);

export type CINEMA_CITIZEN_CATEGORY =
  (typeof CINEMA_CITIZEN_CATEGORY)[keyof typeof CINEMA_CITIZEN_CATEGORY];
console.log("🚀 ~ CINEMA_CITIZEN_CATEGORY:", CINEMA_CITIZEN_CATEGORY);
