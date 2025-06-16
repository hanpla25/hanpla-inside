"use server";

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";
import { LoginFormState } from "./types";

export async function signUp(
  _prevState: LoginFormState,
  formdata: FormData
): Promise<LoginFormState> {
  const supabase = await createClient();
  const id = formdata.get("id");
  const password = formdata.get("password");
  const name = formdata.get("name");

  if (
    typeof id !== "string" ||
    typeof password !== "string" ||
    typeof name !== "string" ||
    !id.trim() ||
    !password.trim() ||
    !name.trim()
  ) {
    return {
      errorMsg: "이름, 아이디, 비밀번호를 모두 입력해주세요",
    };
  }

  if (name.length < 2 || name.length > 6) {
    return {
      nameErrorMsg: "이름이 너무 길거나 짧습니다. (2~6자)",
    };
  }

  if (id.length < 4 || id.length > 8) {
    return {
      idErrorMsg: "아이디가 너무 길거나 짧습니다. (4~8자)",
    };
  }

  const idRegex = /^[A-Za-z0-9]+$/;
  if (!idRegex.test(id)) {
    return {
      idErrorMsg: "아이디는 영어와 숫자만 사용할 수 있습니다.",
    };
  }

  if (password.length < 4 || password.length > 8) {
    return {
      passwordErrorMsg: "비밀번호가 너무 길거나 짧습니다. (4~8자)",
    };
  }

  const passwordRegex = /^[A-Za-z0-9]+$/;
  if (!passwordRegex.test(password)) {
    return {
      passwordErrorMsg: "비밀번호는 영어와 숫자만 사용할 수 있습니다.",
    };
  }

  const { error } = await supabase
    .from("users")
    .insert({ user_id: id, password, user_name: name });

  if (error) console.error(error);

  if (
    error?.message ===
    'duplicate key value violates unique constraint "users_user_name_key"'
  ) {
    return {
      nameErrorMsg: "이미 사용중인 이름입니다.",
    };
  }

  if (
    error?.message ===
    'duplicate key value violates unique constraint "users_pkey"'
  )
    return {
      idErrorMsg: "이미 사용중인 아이디입니다.",
    };

  redirect("/login");
}
