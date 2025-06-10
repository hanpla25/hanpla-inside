import {
  placeholderCategoryList,
  placeholderPostList,
  placeholderPostMain,
} from "./placeholder-data";

export function fetchGalleryName(abbr: string) {
  const gallery = placeholderCategoryList.find((item) => item.abbr === abbr);

  return gallery?.name;
}

export function fetchPostList(abbr: string) {
  const list = placeholderPostList.filter((post) => post.abbr === abbr);

  return list;
}
export function fetchPostMain(id: string) {
  return placeholderPostMain.find((post) => post.post_id === Number(id));
}
