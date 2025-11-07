import { Base } from "./hero";
import { Picture } from "./picture";

export type Tips = {
  text: string;
};
export type Stats = {
  text: string;
  value: string;
  lable: string;
};
export interface ExpertCleaning extends Base {
  description: string;
  image: Picture;
  value: string;
  cardText: string;
  tips: Tips[];
  stats: Stats[];
}
