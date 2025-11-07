import { CTAs } from "./cta";
import { Picture } from "./picture";

export type Base = {
  id: number;
  documentId: string;
  heading: string;
  sub_heading: string;
};

export interface Hero extends Base {
  image: Picture;
  CTAs: CTAs[];
}
