import { Outlet } from "react-router";
import illustration from "../assets/illustration.png";
export default function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-slate-950 text-white">
      <div className="hidden md:flex w-1/2 bg-slate-800 items-center justify-center p-8 border-r border-slate-700">
        <img src={illustration} alt="App Image" />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <Outlet />
      </div>
    </div>
  );
}