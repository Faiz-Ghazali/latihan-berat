// src/pages/SignUp.jsx
import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { signIn } from "../lib/auth";

export default function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    signIn();
    navigate("/dashboard", { replace: true });
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium">Username</label>
            <Input type="text" placeholder="username" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="nama@email.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Confirm Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>

          {/* Tombol Utama Sign Up */}
          <Button type="submit" className="w-full">
            Button Sign-up
          </Button>

          {/* Link Navigasi Kembali ke Sign In */}
          <div className="mt-4 text-center text-sm text-slate-400">
            Sudah punya akun?{" "}
            <Link
              to="/sign-in"
              className="text-black underline hover:text-slate-600"
            >
              Sign In di sini
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
