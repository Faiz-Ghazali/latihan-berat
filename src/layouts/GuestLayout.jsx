import { Outlet, Link } from "react-router";
import { Button } from "../components/ui/button";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <header className="border-b border-slate-700 bg-slate-900 sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <nav className="flex gap-6 text-sm">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#testimony">Testimony</a>
            <a href="#faq">FAQ</a>
          </nav>

          <Link to="/sign-in">
            <Button variant="outline" className="text-black border-white">Signin</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-slate-950 text-slate-100">
        <Outlet />
      </main>
    </div>
  );
}