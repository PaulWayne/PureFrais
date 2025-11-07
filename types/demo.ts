import { Base } from "./hero";
import { Picture } from "./picture";
import { Seo } from "./seo";

export interface Work extends Base {
  description: string;
  dateAt: string;
  before: Picture;
  after: Picture;
}
export interface Demo extends Base {
  works: Work[];
  seo?: Seo;
}
