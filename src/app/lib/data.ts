import { ParamValue } from "next/dist/server/request/params";
import {
  placeholderCategoryList,
  placeholderPostList,
} from "./placeholder-data";

export function fetchGalleryName(abbr: ParamValue): string | undefined {
  const data = placeholderCategoryList;
  const gallery = data.find((item) => item.abbr === abbr);
  return gallery?.name;
}

export function fetchPostList() {
  const data = placeholderPostList;

  return data;
}
