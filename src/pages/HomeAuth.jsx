import Dashboard2 from "./User/Dashboard2";
import Myprofile from "./User/Myprofile";
import UserForm from "@/components/UserForm";

export default function HomeAuth() {
  return (
    <div className="space-y-6">
      <Dashboard2 />
      <Myprofile />
      <UserForm />
    </div>
  );
}
