import { breakpoints } from "./theme";

export const media = {
  xs: (styles) => `@media (max-width: ${breakpoints.xs}) { ${styles} }`,
  sm: (styles) => `@media (min-width: ${parseInt(breakpoints.xs) + 1}px) and (max-width: ${breakpoints.sm}) { ${styles} }`,
  md: (styles) => `@media (min-width: ${parseInt(breakpoints.sm) + 1}px) and (max-width: ${breakpoints.md}) { ${styles} }`,
  lg: (styles) => `@media (min-width: ${parseInt(breakpoints.md) + 1}px) { ${styles} }`,
};
