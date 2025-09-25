export const CINEMA_CITIZEN_CATEGORY = {
  Member: "member",
  Guest: "guest",
} as const;

export type CINEMA_CITIZEN_CATEGORY =
  (typeof CINEMA_CITIZEN_CATEGORY)[keyof typeof CINEMA_CITIZEN_CATEGORY];
