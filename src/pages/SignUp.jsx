// src/pages/SignUp.jsx
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

export default function SignUp() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
        <Button className="w-full">Button Sign-up</Button>

        {/* Link Navigasi Kembali ke Sign In */}
        <div className="text-center text-sm text-slate-400 mt-4">
          Sudah punya akun?{" "}
          <Link to="/sign-in" className="text-white underline hover:text-slate-200">
            Sign In di sini
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}