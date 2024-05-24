import { Route } from "react-router-dom";
import AppLayout from "@/layouts/app.layout";
import {
  SigninPage,
  SignupPage,
  VerifyEmailPage,
  ResetPasswordPage,
  ForgotPasswordPage,
} from "@/features/auth";
import { AboutPage, ContactPage, HomePage } from "@/features/app";

const AppRoutes = (
  <Route path="/" element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    {/* auth */}
    <Route path="/signin" element={<SigninPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/verify-email" element={<VerifyEmailPage />} />
    <Route path="/reset-password" element={<ResetPasswordPage />} />
    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
  </Route>
);

export default AppRoutes;
