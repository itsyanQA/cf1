import { createBrowserRouter, Outlet } from "react-router";
import { Home } from "~/pages/home/home";
import { NotFound } from "~/pages/not-found/not-found";
import { Error } from "~/pages/error/error";
import { Layout } from "~/components/layout/layout";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: <Error />,
    children: [
      { path: routes.home, element: <Home /> },
      { path: routes.error, element: <Error /> },
      { path: routes.notFound, element: <NotFound /> },
    ],
  },
]);
