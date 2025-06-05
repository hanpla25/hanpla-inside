"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleLogin = async () => {
    router.replace(callbackUrl);
  };

  return <button onClick={handleLogin}>로그인</button>;
}
