export const BREAKPOINTS = {
  phoneMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25,
};

export const QUERIES = {
  phoneAndUnder: `max-width: ${BREAKPOINTS.phoneMax}rem`,
  tabletAndUnder: `max-width: ${BREAKPOINTS.tabletMax}rem`,
  laptopAndUnder: `max-width: ${BREAKPOINTS.laptopMax}rem`,
}