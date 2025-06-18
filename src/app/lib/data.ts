import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";
import { Gallery, Post, UserPayload, } from "./types";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function fetchGalleries(): Promise<Gallery[]> {
  const supabase = await createClient();

  const { data, error } = await supabase.from("galleries").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function fetchGalleryName(abbr: string): Promise<string> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("galleries")
    .select("gall_name")
    .eq("abbr", abbr)
    .single();

  if (error) {
    console.error(error);
    redirect("/");
  }

  return data.gall_name;
}

export async function fetchRealtimePosts(): Promise<Post[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .gte("like_count", 10)
    .order("id", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getUserFromToken(): Promise<UserPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;
    console.log("decoded token:", decoded); // 👈 이걸 꼭 찍어보세요

    return {
      user_id: decoded.user_id,
      user_name: decoded.user_name,
      created_at: decoded.created_at,
    };
  } catch {
    return null;
  }
}
