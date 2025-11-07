import { Picture } from "./picture";

export interface User {
  firstname: string;
  lastname: string;
  job: string;
  bio: string;
  quote: string;
  image: Picture;
}
