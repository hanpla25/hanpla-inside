"use client";

import React, { useActionState } from "react";
import { SignUpButton } from "./buttons";
import { LoginFormState } from "@/app/lib/types";
import { signUp } from "@/app/lib/action";

const initialState: LoginFormState = {};

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(signUp, initialState);

  return (
    <form className="space-y-3" action={formAction}>
      <div className="px-6 pb-4 pt-8">
        <h1 className=" mb-3 text-2xl">회원가입</h1>
        <div className="w-full">
          <div>
            <div className="flex items-center text-xs my-5">
              <label
                className="block text-xs font-medium text-gray-900"
                htmlFor="name"
              >
                이름
              </label>
              <span className="ml-10 text-red-600 flex-1">
                {state.nameErrorMsg && state.nameErrorMsg}
              </span>
            </div>
            <div className="relative">
              <input
                className={`w-full rounded-md border-2 py-[9px] pl-8 text-sm placeholder:text-gray-500 ${
                  state.nameErrorMsg ? "border-red-500" : "border-gray-200"
                }`}
                id="name"
                type="text"
                name="name"
                placeholder="이름을 입력하세요."
                required
                defaultValue={state.input?.name}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center text-xs my-5">
              <label
                className="block text-xs font-medium text-gray-900"
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
                placeholder="아이디를 입력하세요."
                required
                defaultValue={state.input?.id}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-xs my-5">
              <label
                className="block text-xs font-medium text-gray-900"
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
                placeholder="비밀번호를 입력하세요."
                required
                defaultValue={state.input?.password}
              />
            </div>
          </div>
        </div>
        <div>
          <SignUpButton isPending={isPending} />
        </div>
      </div>
    </form>
  );
}
