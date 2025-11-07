import { CTAs } from "./cta";
import { Base } from "./hero";
import { Picture } from "./picture";

export interface TeamMember extends Base {
  firstname: string;
  lastname: string;
  bio: string;
  job: string;
  image: Picture;
  slug: string;
  quote: string;
  skills: Skill[];
  contact: Contact;
}
export type Skill = {
  name: string;
  percentage: number;
};
export type Contact = {
  email: string;
  phone: string;
  address: string;
};
export interface HomePageTeam extends Base {
  cta: CTAs;
  members: TeamMember[];
  description: string;
}
