import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { signOut } from "../lib/auth";

export default function Dashboard() {
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/", { replace: true });
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Authenticated area</p>
          <h1 className="text-3xl font-bold">Welcome back</h1>
        </div>
        <Button variant="outline" onClick={handleSignOut}>
          Sign out
        </Button>
      </div>
    </div>
  );
}
