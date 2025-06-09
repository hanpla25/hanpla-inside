import LoginForm from "@/app/ui/login/login-form";
import { redirect } from "next/navigation";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function LoginPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const callbackUrl = searchParams.callbackUrl;
  const isLogin = false;

  if (isLogin) {
    redirect("/");
  }

  if (!callbackUrl) {
    redirect(`/login?callbackUrl=${encodeURIComponent("/")}`);
  }

  return <LoginForm />;
}
