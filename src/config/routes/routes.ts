export const routes = {
  home: "/",
  error: "/error",
  notFound: "*",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
