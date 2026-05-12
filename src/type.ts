/* =========================
   MENU / FOOTER
========================= */

export type MenuItem = {
  label: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

/* =========================
   HERO
========================= */

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

/* =========================
   GALLERY
========================= */

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  span?: string;
};

/* =========================
   BENEFIT SECTION
========================= */

export type BenefitCard = {
  id: number;
  title: string;
  description: string;
  highlight?: boolean;
};

export type ApiResponse = {
  heading: string;
  description?: string;
  cards: BenefitCard[];
};

/* =========================
   DESIGN CARD
========================= */

export type DesignCard = {
  id: number;
  title: string;
  oldPrice: string;
  newPrice: string;
  image?: string;
  isFavorite?: boolean;
};

/* =========================
   ABOUT
========================= */

export type AboutCard = {
  title: string;
  description: string;
};

export type AboutData = {
  heading: string;
  description: string;
  cards: AboutCard[];
};

/* =========================
   BLOG
========================= */

export type Blog = {
  image: string;
  title: string;
  desc: string;
  date: string;
};

/* =========================
   TESTIMONIAL
========================= */

export type Testimonial = {
  name: string;
  text: string;
  avatar: string;
  plantImg: string;
};

/* =========================
   FORM
========================= */

export type FormField = {
  id: number;
  type: string;
  placeholder: string;
  name: string;
};