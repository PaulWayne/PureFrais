import { Picture } from "./picture";

type Stat = {
  text: string;
  value: string;
};
export type FAQ = {
  id: number;
  heading: string;
  sub_heading: string;
  faqs: FAQItem[];
  image: Picture;
  stat1: Stat;
  stat2: Stat;
};

export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};
