export const routes = {
  home: "/",
  notFound: "*",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
