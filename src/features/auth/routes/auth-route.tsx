import type { RouteObject } from "react-router";
import LoginPage from "./pages/login-page.tsx";

export const AuthRoute: RouteObject[] = [
  {
    path: "login",
    element: <LoginPage />,
  },
];
