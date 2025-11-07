import { Base } from "./hero";
import { Service } from "./service";

export interface Cleaniness extends Base {
  description: string;
  services: Service[];
}
