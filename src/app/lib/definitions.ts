interface RecentGallery {
  name: string;
  abbr: string;
}

interface BestPostList {
  id: number;
  title: string;
  abbr: string;
  galleryName: string;
  timestamp: string;
  comment_count: number;
}

interface CategoryList {
  id: number;
  abbr: string;
  name: string;
}

interface Galleries {
  abbr: string;
  name: string;
}

interface PostList {
  id: number;
  title: string;
  nickname: string;
  view: number;
  likes: number;
  comment_count: number;
  ip_adress?: string;
  created_at: string;
}
