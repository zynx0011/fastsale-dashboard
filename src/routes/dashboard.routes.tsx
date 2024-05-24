import { Route } from "react-router-dom";
import DashboardLayout from "@/layouts/dashboard.layout";

const DashboardRoutes = (
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<h1>Dashboard</h1>} />
  </Route>
);

export default DashboardRoutes;
