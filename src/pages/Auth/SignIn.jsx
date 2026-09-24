import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useAuthStore } from "./store/useAuthStore";

export default function SignIn() {
  const [email, setEmail] = useState("user@autobase.com");
  const [password, setPassword] = useState("password");

  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (login(email, password)) {
      navigate("/user");
    }
  }

  return (
    <Card className="w-full max-w-md border-slate-800 bg-slate-900 text-white shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Sign In to AutoBase</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 rounded-md border border-red-500/20 bg-red-500/10 p-3 text-center text-xs font-medium text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-400">Email Address</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border-slate-700 bg-slate-800 text-white" />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-400">Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border-slate-700 bg-slate-800 text-white" />
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500">
            Masuk ke Portal
          </Button>

          <div className="mt-4 text-center text-xs text-slate-400">
            Belum punya akun? <Link to="#" className="text-indigo-400 underline">Daftar sekarang</Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}