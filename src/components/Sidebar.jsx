import { NavLink } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { useNavigate } from "react-router";
import { GraduationCap, Home, Info, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { useAuthStore } from "../pages/Auth/store/useAuthStore";

// List menu default: Home, About, Contact
const defaultNavItems = [
  { to: "/user", label: "Home", icon: Home, end: true },
  { to: "about", label: "About", icon: Info },
  { to: "contact", label: "Contact", icon: Mail },
];

function AppSidebar({ items = defaultNavItems }) {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2.5 px-2 py-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <GraduationCap
              size={16}
              className="text-sidebar-primary-foreground"
            />
            <Button
        variant="ghost"
        size="sm"
        onClick={handleLogout}
        className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-500/10"
      >
        <LogOut size={16} />
        Sign Out
      </Button>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-sidebar-foreground leading-tight">
              Learn React
            </span>
            <span className="text-xs text-sidebar-foreground/60 leading-tight">
              User Portal
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.to}>
              <NavLink to={item.to} end={item.end} className="w-full">
                {({ isActive }) => (
                  <SidebarMenuButton isActive={isActive} tooltip={item.label}>
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <div className="px-2 py-2 text-xs text-sidebar-foreground/50 text-center">
          © {new Date().getFullYear()} Learn React
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
