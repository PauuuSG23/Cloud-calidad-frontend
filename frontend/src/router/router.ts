import { Error404 } from "@/components/ui/Error404";
import { Home } from "@/pages/Home";
import { Pilot } from "@/pages/Pilot";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/pilots/:name",
    Component: Pilot,
  },
  {
    path: "*",
    Component: Error404,
  },
]);