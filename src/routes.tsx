import type { RouteObject } from "react-router";
import { AuthRoute } from "./features/auth/routes/auth-route.tsx";
import AuthLayout from "./features/auth/components/layout/auth-layout.tsx";

import { diplomaRoutes } from "./features/diploma/routes/diploma.routes.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      // Authentication Routes
      {
        element: <AuthLayout />,
        children: AuthRoute,
      },
      // Uesr Routes
      {
        children: diplomaRoutes,
      },
    ],
  },
  {
    path: "dashboard",
    element: <h1 className="flex text-amber-800">admin dashboard</h1>,
  },
];
