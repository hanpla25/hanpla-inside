"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { Suspense, useEffect } from "react";
import { usePreviousPageStore } from "../store/usePageHistoryStore";

const usePreviousPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const setPreviousUrl = usePreviousPageStore((state) => state.setPreviousUrl);

  useEffect(() => {
    const storage = sessionStorage;

    const currentUrl =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    const previousUrl = storage.getItem("CURRENT_URL");

    if (previousUrl !== currentUrl) {
      if (previousUrl) {
        storage.setItem("PREVIOUS_URL", previousUrl);
        setPreviousUrl(previousUrl);
      }

      storage.setItem("CURRENT_URL", currentUrl);
    }
  }, [pathname, searchParams]);
};

const PreviousPageComponent = () => {
  usePreviousPage();
  return null;
};

const SuspensePreviousPageComponent = () => (
  <Suspense fallback={null}>
    <PreviousPageComponent />
  </Suspense>
);

export default SuspensePreviousPageComponent;
