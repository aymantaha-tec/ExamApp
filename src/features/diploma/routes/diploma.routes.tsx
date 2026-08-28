import type { RouteObject } from "react-router";
import DiplomaPage from "./pages/diploma-page.tsx";

export const diplomaRoutes: RouteObject[] = [
  {
    index: true,
    element: <DiplomaPage />,
  },
];
