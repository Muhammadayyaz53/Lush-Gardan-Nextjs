export type MenuItem = {
  label: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href: string;
};
export type HeroButton = {
  text: string;
  href: string;
  variant: "primary" | "secondary";
};

export type Button = {
  text: string;
  href: string;
  variant: "primary" | "secondary";
};

export type HeroContent = {
  title: string;
  description: string;
  buttons: Button[];
};


export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  span?: string;
};

export type ApiResponse = {
   cards: BenefitCard[];
};

export  type BenefitCard = {
  id: number;
  title: string;
  description: string;
  highlight?: boolean;
};

export type Blog = {
  image: string;
  title: string;
  desc: string;
  date: string;
};


export type Testimonial = {
  name: string;
  text: string;
  avatar: string;
  plantImg: string;
};

export type FormField = {
  id: number;
  type: string;
  placeholder: string;
  name: string;
};


export type AboutCard = {
  title: string;
  description: string;
};

export type AboutData = {
  heading: string;
  description: string;
  cards: AboutCard[];
};

export type cards = {
  isFavorite?: boolean;
  image?: string;
  id: number;
  title: string;
  oldPrice: string;
  newPrice: string;
};

