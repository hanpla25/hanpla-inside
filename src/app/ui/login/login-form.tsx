"use client";

import { LoginFormState } from "@/app/lib/types";
import { LoginButton } from "./buttons";
import { useActionState } from "react";
import { login } from "@/app/lib/action";
import { usePathname, useSearchParams } from "next/navigation";
import LoginLinks from "./login-links";

export default function LoginForm() {
  const initialState: LoginFormState = {};
  const [state, formAction, isPending] = useActionState(login, initialState);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <form className="space-y-3 p-2" action={formAction}>
      <div className={`"${!isHome ? "px-6 pb-4 pt-8" : "px-0 pb-0 pt-0"} `}>
        {!isHome && <h1 className="mb-3 text-2xl">로그인</h1>}
        <div className="w-full">
          <div>
            <div className="flex items-center text-xs my-5">
              <label
                className={`${
                  isHome ? "sr-only" : "block text-xs font-medium text-gray-900"
                }`}
                htmlFor="id"
              >
                아이디
              </label>
              <span className="ml-7 text-red-600 flex-1">
                {state.idErrorMsg && state.idErrorMsg}
              </span>
            </div>
            <div className="relative">
              <input
                className={`w-full rounded-md border-2 py-[9px] pl-8 text-sm placeholder:text-gray-500 ${
                  state.idErrorMsg ? "border-red-500" : "border-gray-200"
                }`}
                id="id"
                type="text"
                name="id"
                placeholder={`${isHome ? "아이디" : "아이디를 입력하세요."}`}
                required
                defaultValue={state.input?.id}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-xs my-5">
              <label
                className={`${
                  isHome ? "sr-only" : "block text-xs font-medium text-gray-900"
                }`}
                htmlFor="password"
              >
                비밀번호
              </label>
              <span className="ml-3.5 text-red-600 flex-1">
                {state.passwordErrorMsg && state.passwordErrorMsg}
              </span>
            </div>
            <div className="relative">
              <input
                className={`w-full rounded-md border-2 py-[9px] pl-8 text-sm placeholder:text-gray-500 ${
                  state.passwordErrorMsg ? "border-red-500" : "border-gray-200"
                }`}
                id="password"
                type="password"
                name="password"
                placeholder={`${
                  isHome ? "비밀번호" : "비밀번호를 입력하세요."
                }`}
                required
                defaultValue={state.input?.password}
              />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <div>
          <LoginButton isPending={isPending} />
        </div>
      </div>
      <LoginLinks />
    </form>
  );
}
