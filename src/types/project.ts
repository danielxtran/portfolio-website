export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  company: string;
  startDate: string; // "YYYY-MM"
  endDate: string | null; // null means ongoing
  location: string;
  description: string;
  featured?: boolean;
  images?: string[];
  links?: ProjectLink[];
};
