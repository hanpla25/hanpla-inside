import SignupForm from "@/app/ui/singup/singup-form";
import { redirect } from "next/navigation";

export default function SignupPage() {
  const isLogin = false;

  if (isLogin) {
    redirect("/");
  }

  return <SignupForm />;
}
