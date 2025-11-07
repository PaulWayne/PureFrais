import { Base } from "./hero";
import { Picture } from "./picture";
import { Seo } from "./seo";

export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  excerpt: string;
  image: Picture;
  categories: Category[];
  seo: Seo;
  createdAt: string;
}
export type Category = {
  id: number;
  name: string;
};
export interface Blog extends Base {
  articles: Article[];
}
