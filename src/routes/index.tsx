import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppRoutes from "./app.routes";
import NotFound from "@/components/not-found";
import DashboardRoutes from "./dashboard.routes";

export const router = createBrowserRouter(
  createRoutesFromElements([
    AppRoutes,
    DashboardRoutes,
    <Route path="*" element={<NotFound />} />,
  ])
);
