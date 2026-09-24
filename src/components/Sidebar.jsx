import { NavLink, useNavigate } from "react-router";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Car, Home, Gauge, Bookmark, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useAuthStore } from "../pages/Auth/store/useAuthStore";

const navItems = [
  { to: "/user", label: "Dashboard", icon: Home, end: true },
  { to: "#katalog", label: "Katalog Mobil", icon: Car },
  { to: "#performa", label: "Analisis Performa", icon: Gauge },
  { to: "#garasi", label: "Garasi Saya", icon: Bookmark },
];

export default function AppSidebar() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">
            🏎️
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">AutoBase</span>
            <span className="text-xs text-slate-500">Member Portal</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <NavLink to={item.to} end={item.end} className="w-full">
                {({ isActive }) => (
                  <SidebarMenuButton isActive={isActive}>
                    <item.icon className="size-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-3 border-t">
        <Button variant="ghost" size="sm" onClick={handleLogout} className="w-full justify-start gap-2 text-red-500 hover:bg-red-50 hover:text-red-600">
          <LogOut size={16} /> Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}