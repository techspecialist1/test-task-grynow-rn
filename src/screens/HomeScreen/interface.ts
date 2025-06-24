export interface RawArticle {
  article_id: string;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  description: string | null;
  content: string;
  pubDate: string;
  pubDateTZ: string;
  image_url: string | null;
  video_url: string | null;
  source_id: string;
  source_name: string;
  source_priority: number;
  source_url: string;
  source_icon: string;
  language: string;
  country: string[];
  category: string[];
  sentiment: string;
  sentiment_stats: string;
  ai_tag: string;
  ai_region: string;
  ai_org: string;
  duplicate: boolean;
  isBookmarked?: boolean; 
}
