import { Outlet, Navigate } from "react-router";
import illustration from "../assets/illustration.jpg";
import { useAuthStore } from "../pages/Auth/store/useAuthStore"; 

export default function AuthLayout() {
  const user = useAuthStore((state) => state.user);

  
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
  if (user) {
    return <Navigate to={user.role === "user" ? "/admin" : "/user"} replace />
  }
  

  return (
    <div className="flex min-h-screen w-full bg-slate-950 text-white">
      <div className="hidden md:flex w-1/2 bg-slate-800 items-center justify-center p-8 border-r border-slate-700">
        <img src={illustration} alt="App Image" className="max-w-full h-auto object-contain" />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <Outlet />
      </div>
    </div>
  );
}