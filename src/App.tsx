import { RouterProvider } from "react-router";
import { router } from "~/config/routes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    // queries: {
    //   staleTime: 1000 * 60 * 5,
    // },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
