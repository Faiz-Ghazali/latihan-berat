import { Outlet, useLocation } from "react-router";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
function AppLayout() {
  const { pathname } = useLocation();
  const isGuestHome = pathname === "/admin";

  return (
    <TooltipProvider>
      <SidebarProvider>
        <Navbar showSidebar={!isGuestHome} />
        {!isGuestHome && <Sidebar />}
        <SidebarInset>
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default AppLayout;
