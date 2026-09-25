import { NavLink, useNavigate } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Car, Home, Gauge, Bookmark, LogOut, UserCheck } from "lucide-react";
import { Button } from "./ui/button";
import { useAuthStore } from "../pages/Auth/store/useAuthStore";

const adminNavItems = [
  { to: "/admin", label: "Dashboard", icon: Home, end: true },
  { to: "/admin/catalog", label: "Katalog Mobil", icon: Car },
  { to: "/admin/performa", label: "Analisis Performa", icon: Gauge },
  { to: "/admin/mygarage", label: "Garasi Saya", icon: Bookmark },
];

const userNavItems = [
  { to: "/user", label: "Dashboard", icon: Home, end: true },
  { to: "/user/form", label: "Form Data Diri", icon: UserCheck },
  { to: "/user/katalog", label: "Katalog Mobil", icon: Car },
];

export default function AppSidebar() {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const navItems = user?.role === "admin" ? adminNavItems : userNavItems;

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <Sidebar className="border-r border-slate-700 bg-[#0b1f3a] text-slate-100">
      <SidebarHeader className="border-b border-slate-700 bg-[#0b1f3a]">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-[#1e4d9a] text-white font-bold shadow-md shadow-blue-950/40">
            🛻
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight text-white">AutoBase</span>
            <span className="text-xs text-slate-300">
              {user?.role === "admin" ? "Admin Portal" : "Member Portal"}
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#0b1f3a] px-2 py-4">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <NavLink to={item.to} end={item.end} className="w-full">
                {({ isActive }) => (
                  <SidebarMenuButton
                    isActive={isActive}
                    className={
                      isActive
                        ? "bg-[#153b72] text-white hover:bg-[#153b72]"
                        : "text-slate-200 hover:bg-slate-800 hover:text-white"
                    }
                  >
                    <item.icon className="size-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-slate-700 bg-[#0b1f3a] p-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="w-full justify-start gap-2 text-slate-200 hover:bg-slate-800 hover:text-white"
        >
          <LogOut size={16} /> Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
