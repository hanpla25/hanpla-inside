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
  abbr: string;
  title: string;
  nickname: string;
  view: number;
  likes: number;
  comment_count: number;
  ip_adress?: string;
  created_at: string;
}

interface PostMain {
  id: number;
  post_id: number;
  abbr: string;
  title: string;
  nickname: string;
  content: string;
  view: number;
  likes: number;
  dislikes: number;
  comment_count: number;
  ip_adress?: string;
  created_at: string;
}

interface CommentInfo {
  id: number;
  nickname: string;
  ip_adress?: string;
  content: string;
  created_at: string;
  is_reply: boolean;
}
