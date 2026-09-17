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

export default function SignIn() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    signIn();
    navigate("/dashboard", { replace: true });
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="nama@email.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input type="password" placeholder="••••••••" />
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
