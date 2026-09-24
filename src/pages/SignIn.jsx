import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { useAuthStore } from "../pages/Auth/store/useAuthStore"; 

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const isSuccess = login(email, password);

    if (isSuccess) {
      const currentUser = useAuthStore.getState().user;
      navigate(currentUser.role === "admin" ? "/admin" : "/user", { replace: true });
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 rounded-md bg-red-500/10 p-3 text-center text-sm font-medium text-red-500 border border-red-500/20">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="nama@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Button Sign-in
          </Button>
          <div className="mt-4 text-center text-sm text-slate-400">
            Belum punya akun?{" "}
            <Link
              to="/sign-up"
              className="text-black underline hover:text-slate-600"
            >
              Sign Up di sini
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}