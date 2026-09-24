import { Outlet } from "react-router";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar showSidebar={true} />
        <main className="flex-1 bg-slate-50 p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}