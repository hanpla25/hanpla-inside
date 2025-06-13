import { useEffect, useState } from "react";
import { createClient } from "@/app/utils/supabase/client";
import { RecentGallery } from "@/app/lib/types";

export function useRecentGalleries(abbr?: string) {
  const [items, setItems] = useState<RecentGallery[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("visit_gallery");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setItems(parsed);
      } catch {
        console.error("visit_gallery parsing error");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof abbr !== "string") return;

    const fetch = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("galleries")
        .select("*")
        .eq("abbr", abbr)
        .single();

      if (error || !data) {
        return;
      }

      setItems((prev) => {
        const filtered = prev.filter((item) => item.abbr !== abbr);
        const newItem = {
          abbr,
          name: data.gall_name,
          link: `/gallery/${abbr}`,
        };
        const newItems = [newItem, ...filtered];
        localStorage.setItem("visit_gallery", JSON.stringify(newItems));
        return newItems;
      });
    };

    fetch();
  }, [abbr]);

  return { items, setItems };
}
