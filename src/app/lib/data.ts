import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";
import { Gallery, Post } from "./types";

export async function fetchGalleries(): Promise<Gallery[]> {
  const supabase = await createClient();

  const { data, error } = await supabase.from("galleries").select("*");

  if (error) {
    console.error(error);
    redirect("/");
  }

  return data;
}

export async function fetchGalleryName(abbr: string): Promise<{
  gall_name: string;
}> {
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

  return data;
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
