import { Outlet, Navigate } from "react-router";
import illustration from "../assets/illustration.jpg";
import { useAuthStore } from "../pages/Auth/store/useAuthStore"; // Import store Zustand kamu

export default function AuthLayout() {
  // Ambil state user dari Zustand store untuk cek status autentikasi
  const user = useAuthStore((state) => state.user);

  // Jika user sudah terautentikasi/login, redirect otomatis ke halaman lain (misal /user atau /dashboard)
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
  if (user.role === 'admin') {
    return <Navigate to="/admin" replace />
  }
  if (user.role === 'user') {
    return <Navigate to="/user" replace />
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