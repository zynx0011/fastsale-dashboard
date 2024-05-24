import { useAuth } from "@/store/auth.provider";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/header";

export default function DashboardLayout() {
  // user have permission to access
  const isAuth = useAuth((state) => state.isAuth);

  if (!isAuth) return <Navigate to="/signin" replace />;

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
