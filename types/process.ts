import { Base } from "./hero";
import { Picture } from "./picture";

interface Item extends Base {
  tab: string;
  step: string;
  image: Picture;
}
export interface Process extends Base {
  items: Item[];
}
