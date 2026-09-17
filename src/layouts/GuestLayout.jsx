import { Outlet, Link } from "react-router";
import { Button } from "../components/ui/button";

export default function GuestLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-8">
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-4 text-sm text-slate-300 md:gap-6"
          >
            <a className="transition-colors hover:text-white" href="#hero">
              Home
            </a>
            <a className="transition-colors hover:text-white" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-white" href="#testimony">
              Testimony
            </a>
            <a className="transition-colors hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>

          <Link to="/sign-in">
            <Button variant="outline" size="sm">
              Sign in
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 text-slate-100">
        <Outlet />
      </main>
    </div>
  );
}
