import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../pages/Auth/store/useAuthStore";

export function Guard({ role, guest }) {
  const user = useAuthStore((state) => state.user);

  if (guest && user) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/user"} replace />;
  }

  if (!guest) {
    if (!user) return <Navigate to="/signin" replace />;
    
    if (role && user.role !== role) {
      return <Navigate to={user.role === "admin" ? "/admin" : "/user"} replace />;
    }
  }

  return <Outlet />;
}