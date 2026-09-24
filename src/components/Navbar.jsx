import { useNavigate } from "react-router";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { useAuthStore } from "../pages/Auth/store/useAuthStore"; // Sesuaikan path store kamu

function Navbar({ showSidebar = true }) {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav
      className="flex h-14 shrink-0 items-center justify-between border-b 
      border-border px-4 bg-background/95 backdrop-blur sticky top-0 z-40"
    >
      <div className="flex items-center gap-4">
        {showSidebar && (
          <>
            <SidebarTrigger className="-ml-1" />
            <div className="h-5 w-px bg-border" />
          </>
        )}
        <span className="text-sm font-medium text-muted-foreground">
          Learn React
        </span>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleLogout}
        className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-500/10"
      >
        <LogOut size={16} />
        Sign Out
      </Button>
    </nav>
  );
}

export default Navbar;