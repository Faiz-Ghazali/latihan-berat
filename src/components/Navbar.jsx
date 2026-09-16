import { SidebarTrigger } from "./ui/sidebar";
function Navbar({ showSidebar = true }) {
  return (
    <>
      <nav
        className="flex h-14 shrink-0 items-center gap-4 border-b 
        border-border px-4 bg-background/95 backdrop-blur sticky top-0 z-40"
      >
        {showSidebar && (
          <>
            <SidebarTrigger className="-ml-1" />
            <div className="h-5 w-px bg-border" />
          </>
        )}
        <span className="text-sm font-medium text-muted-foreground">
          Learn React
        </span>
      </nav>
    </>
  );
}
export default Navbar;
