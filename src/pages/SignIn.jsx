import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

export default function SignIn() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Sign In</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="nama@email.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>
          <Input type="password" placeholder="••••••••" />
        </div>
        <Button className="w-full">Button Sign-in</Button>
        <Link to="/sign-up">
          <Button variant="outline" className="w-full mt-2">Button Sign-up</Button>
        </Link>
      </CardContent>
    </Card>
  );
}