import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-slate-950 text-white">
      <div className="hidden w-1/2 flex-col justify-between bg-slate-900 p-12 md:flex border-r border-slate-800">
        <div className="flex items-center gap-2 font-bold text-xl text-indigo-400">
          🏎️ AutoBase
        </div>
        <div>
          <h2 className="text-3xl font-bold">Jelajahi Database Mobil Terlengkap.</h2>
          <p className="mt-2 text-slate-400">Temukan spesifikasi, performa, dan harga mobil impian Anda secara akurat.</p>
        </div>
        <div className="text-xs text-slate-500">© 2026 AutoBase Inc.</div>
      </div>
      <div className="flex w-full items-center justify-center p-6 md:w-1/2">
        <Outlet />
      </div>
    </div>
  );
}