import React from "react";
import { SignUpButton } from "./buttons";

export default function SignupForm() {
  return (
    <form className="space-y-3">
      <div className="px-6 pb-4 pt-8">
        <h1 className=" mb-3 text-2xl">회원가입</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="text"
            >
              이름
            </label>
            <div className="relative">
              <input
                className="w-full rounded-md border border-gray-200 py-[9px] pl-8 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="이름을 입력하세요."
                required
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="id"
            >
              아이디
            </label>
            <div className="relative">
              <input
                className="w-full rounded-md border border-gray-200 py-[9px] pl-8 text-sm outline-2 placeholder:text-gray-500"
                id="id"
                type="text"
                name="id"
                placeholder="아이디를 입력하세요."
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full rounded-md border border-gray-200 py-[9px] pl-8 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요."
                required
                minLength={4}
              />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" />
        <div>
          <SignUpButton />
        </div>
      </div>
    </form>
  );
}
