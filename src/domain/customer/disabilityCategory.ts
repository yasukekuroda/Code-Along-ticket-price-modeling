export const DISABILITY_CATEGORY = {
  Handicapped: "handicapped",
  None: "none",
} as const;

export type DISABILITY_CATEGORY =
  (typeof DISABILITY_CATEGORY)[keyof typeof DISABILITY_CATEGORY];
