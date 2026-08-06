export const EXPERIENCE_CATEGORIES = ["Program", "Involvement", "Work"] as const;

export type Experience = {
  slug: string;
  title: string;
  company: string;
  startDate: string; // "YYYY-MM"
  endDate: string | null; // null means ongoing
  location: string;
  description: string;
  current: boolean;
  featured?: boolean;
  group?: string;
  category: (typeof EXPERIENCE_CATEGORIES)[number];
  continuesFrom?: string; // slug of the entry this role evolved from
};
