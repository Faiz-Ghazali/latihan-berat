import { useNavigate } from "react-router";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { LogOut, Bell } from "lucide-react";
import { useAuthStore } from "../pages/Auth/store/useAuthStore";

export default function Navbar({ showSidebar = true }) {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav className="sticky top-0 z-40 flex h-14 shrink-0 items-center justify-between border-b border-slate-700 bg-[#0b1f3a] px-4 text-slate-100">
      <div className="flex items-center gap-3">
        {showSidebar && (
          <SidebarTrigger className="text-slate-100 hover:bg-slate-800" />
        )}
        <span className="font-semibold text-white">AutoBase Portal</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs font-medium text-slate-200">
          Halo, {user?.name || "Driver"}
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="size-8 text-slate-200 hover:bg-slate-800 hover:text-white"
        >
          <Bell className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="gap-2 text-slate-200 hover:bg-slate-800 hover:text-white"
        >
          <LogOut size={16} /> Logout
        </Button>
      </div>
    </nav>
  );
}
