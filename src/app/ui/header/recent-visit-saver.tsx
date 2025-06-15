"use client";

import { RecentGallery } from "@/app/lib/types";
import { setRecentGalleries } from "@/app/lib/utils";
import { useEffect } from "react";

type Props = {
  recentGalleryData: RecentGallery;
  gallName: string;
};

export default function RecentGallerySaver({
  recentGalleryData,
  gallName,
}: Props) {
  useEffect(() => {
    if (!gallName) {
      return;
    }
    setRecentGalleries(recentGalleryData);
  }, [recentGalleryData]);

  return null;
}
