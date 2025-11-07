import { Base } from "./hero";
import { Picture } from "./picture";

export interface Service extends Base {
  slug: string;
  icon: string;
  description: string;
  benefits: string;
  image: Picture;
}
export interface HoomePageService extends Base {
  services: Service[];
}
