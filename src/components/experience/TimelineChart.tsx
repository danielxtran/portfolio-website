import { getSemesterRangeByIndex, type Semester } from "@/lib/semester";
import { getTimelineLanes, type TimelineSegment } from "@/lib/timeline";
import { EXPERIENCE_CATEGORIES, type Experience } from "@/types/experience";

const CATEGORY_COLOR: Record<Experience["category"], string> = {
  Program: "bg-blue",
  Involvement: "bg-sage",
  Work: "bg-mustard",
};

const COLUMN_WIDTH = 120;
const SHORT_SEGMENT_WIDTH = 55;
const ROW_GAP = 3; // small visual seam between segments sharing a row (e.g. a promotion)

type TimelineChartProps = {
  currentSemester: Semester;
  onSelect: (slug: string) => void;
};

type PositionedSegment = {
  segment: TimelineSegment;
  startCol: number;
  endCol: number;
  isOngoing: boolean;
};

// Segments in the same row are placed left-to-right; if a hand-off lands in
// the same semester as the previous segment's end (e.g. one role ends and
// the next starts the same month), that segment is pushed to start one
// column later so the two boxes never overlap.
function positionRow(
  segments: TimelineSegment[],
  columnOf: (index: number) => number,
  currentCol: number,
): PositionedSegment[] {
  const positioned: PositionedSegment[] = [];

  for (const segment of segments) {
    let startCol = columnOf(segment.startIndex);
    const naturalEndCol = segment.endIndex !== null ? columnOf(segment.endIndex) : currentCol;
    const previous = positioned[positioned.length - 1];

    if (previous && startCol <= previous.endCol) {
      startCol = previous.endCol + 1;
    }

    positioned.push({
      segment,
      startCol,
      endCol: Math.max(naturalEndCol, startCol),
      isOngoing: segment.endIndex === null,
    });
  }

  return positioned;
}

export default function TimelineChart({ currentSemester, onSelect }: TimelineChartProps) {
  const lanes = getTimelineLanes();

  if (lanes.length === 0) {
    return <p className="font-body text-sm italic text-ink/50">None yet</p>;
  }

  const current = currentSemester;
  const earliestIndex = Math.min(...lanes.map((lane) => lane.segments[0].startIndex));
  const semesters = getSemesterRangeByIndex(earliestIndex, current.index);
  const columnOf = (index: number) => index - earliestIndex + 1;
  const currentCol = columnOf(current.index);
  const markerLeft = currentCol * COLUMN_WIDTH + (currentCol - 1) * ROW_GAP;

  return (
    <div className="space-y-8">
      {EXPERIENCE_CATEGORIES.map((category) => {
        const rows = lanes
          .map((lane) => ({
            id: lane.id,
            segments: lane.segments.filter((segment) => segment.experience.category === category),
          }))
          .filter((row) => row.segments.length > 0);

        if (rows.length === 0) return null;

        return (
          <div key={category}>
            <h3 className="font-body text-sm font-medium uppercase tracking-wide text-ink/50">
              {category}
            </h3>
            <div className="relative mt-3 overflow-x-auto">
              <div
                className="grid"
                style={{
                  gridTemplateColumns: `repeat(${semesters.length}, ${COLUMN_WIDTH}px)`,
                  columnGap: `${ROW_GAP}px`,
                }}
              >
                {semesters.map((semester, i) => (
                  <div
                    key={semester.index}
                    title={semester.label}
                    className="border-b border-ink/10 px-1 pb-2 text-center font-body text-xs text-ink/50"
                    style={{ gridColumn: i + 1, gridRow: 1 }}
                  >
                    {semester.term.slice(0, 3)} &apos;{String(semester.year).slice(-2)}
                  </div>
                ))}

                {rows.flatMap((chartRow, rowIndex) => {
                  const row = rowIndex + 2;
                  const positioned = positionRow(chartRow.segments, columnOf, currentCol);

                  return positioned.map(({ segment, startCol, endCol, isOngoing }) => {
                    const isShort = startCol === endCol;

                    return (
                      <button
                        key={segment.experience.slug}
                        type="button"
                        onClick={() => onSelect(segment.experience.slug)}
                        title={segment.experience.title}
                        aria-label={segment.experience.title}
                        className={`my-2 flex items-center overflow-hidden rounded px-2 py-2 text-left text-sm text-paper transition-opacity hover:opacity-80 ${CATEGORY_COLOR[segment.experience.category]}`}
                        style={{
                          gridColumn: `${startCol} / ${endCol + 1}`,
                          gridRow: row,
                          justifySelf: isShort ? "start" : undefined,
                          width: isShort ? `${SHORT_SEGMENT_WIDTH}px` : undefined,
                          maskImage: isOngoing
                            ? "linear-gradient(to right, black 75%, transparent 100%)"
                            : undefined,
                        }}
                      >
                        <span className="truncate">{segment.experience.title}</span>
                      </button>
                    );
                  });
                })}
              </div>

              <div
                className="pointer-events-none absolute top-0 bottom-0 z-10 border-l border-dashed border-ink/40"
                style={{ left: `${markerLeft}px` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
