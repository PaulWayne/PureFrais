import { Base } from "./hero";
import { User } from "./user";

export interface Testimonial extends Base {
  text: string;
  rating: number;
  user: User;
}
export interface HomeTestimonials extends Base {
  testimonials: Testimonial[];
}
