import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home";
import { JelajahiJasa } from "../pages/JelajahiJasa";
import { DetailFreelancer } from "../pages/DetailFreelancer";
import { Auth } from "../pages/Auth";
import { Dashboard } from "../pages/Dashboard";
import { Demo } from "../pages/Demo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/jelajahi-jasa",
    Component: JelajahiJasa,
  },
  {
    path: "/freelancer/:id",
    Component: DetailFreelancer,
  },
  {
    path: "/auth",
    Component: Auth,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/demo",
    Component: Demo,
  },
]);
