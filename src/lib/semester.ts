export type Term = "Spring" | "Summer" | "Autumn";

export type Semester = {
  year: number;
  term: Term;
  label: string; // e.g. "Autumn 2025"
  index: number; // globally comparable, increases monotonically over time
};

const TERM_ORDER: Term[] = ["Spring", "Summer", "Autumn"];

// Spring: Jan-Apr, Summer: May-Jul, Autumn: Aug-Dec (OSU term boundaries).
function getTermForMonth(month: number): Term {
  if (month <= 4) return "Spring";
  if (month <= 7) return "Summer";
  return "Autumn";
}

function buildSemester(year: number, term: Term): Semester {
  return { year, term, label: `${term} ${year}`, index: year * 3 + TERM_ORDER.indexOf(term) };
}

export function getSemester(date: string): Semester {
  const [yearStr, monthStr] = date.split("-");
  return buildSemester(Number(yearStr), getTermForMonth(Number(monthStr)));
}

export function getCurrentSemester(): Semester {
  const now = new Date();
  const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  return getSemester(date);
}

export function getSemesterRangeByIndex(startIndex: number, endIndex: number): Semester[] {
  const semesters: Semester[] = [];
  for (let index = startIndex; index <= endIndex; index++) {
    semesters.push(buildSemester(Math.floor(index / 3), TERM_ORDER[index % 3]));
  }
  return semesters;
}
