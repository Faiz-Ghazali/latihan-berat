import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-slate-950 text-white">
      <div className="hidden md:flex w-1/2 bg-slate-800 items-center justify-center p-8 border-r border-slate-700">
        <span className="text-2xl font-bold">img</span>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <Outlet />
      </div>
    </div>
  );
}