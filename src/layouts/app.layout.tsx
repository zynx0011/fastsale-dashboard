import Header from "./components/header";
import Footer from "./components/footer";
import { useAuth } from "@/store/auth.provider";
import { Navigate, Outlet } from "react-router-dom";

export default function AppLayout() {
  const isAuth = useAuth((state) => state.isAuth);

  if (isAuth) return <Navigate to="/" replace />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
