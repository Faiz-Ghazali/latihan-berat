import { Navigate } from "react-router";
import { isAuthenticated } from "../lib/auth";

export function GuestOnly({ children }) {
  return isAuthenticated() ? <Navigate to="/dashboard" replace /> : children;
}

export function AuthOnly({ children }) {
  return isAuthenticated() ? children : <Navigate to="/sign-in" replace />;
}
