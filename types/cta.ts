export type CallToAction = {
  id?: string;
  heading: string;
  sub_heading: string;
  CTAs: CTAs[];
};

export type CTAs = {
  id?: string;
  text: string;
  URL: string;
  variant: string;
};
