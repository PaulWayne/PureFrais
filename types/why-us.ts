import { Base } from "./hero";

interface Item extends Base {
  icon: string;
}
export interface WhyUse extends Base {
  items: Item[];
}
