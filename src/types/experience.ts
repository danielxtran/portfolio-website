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
  category: "Program" | "Involvement" | "Work";
};
