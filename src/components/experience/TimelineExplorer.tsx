"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Semester } from "@/lib/semester";
import { EXPERIENCE_CATEGORIES, type Experience } from "@/types/experience";
import RoleList from "./RoleList";
import TimelineChart from "./TimelineChart";
import TimelineDetailDialog from "./TimelineDetailDialog";

type ViewMode = "chart" | "list";

type TimelineExplorerProps = {
  roles: Experience[];
  selectedSlug: string | null;
  currentSemester: Semester;
};

export default function TimelineExplorer({
  roles,
  selectedSlug,
  currentSemester,
}: TimelineExplorerProps) {
  const router = useRouter();
  const [view, setView] = useState<ViewMode>("chart");
  const selectedRole = roles.find((role) => role.slug === selectedSlug) ?? null;

  function openRole(slug: string) {
    router.push(`/experience?role=${slug}`, { scroll: false });
  }

  function closeDialog() {
    router.push("/experience", { scroll: false });
  }

  return (
    <>
      <div className="mb-4 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => setView("chart")}
          aria-pressed={view === "chart"}
          className={`rounded-full px-4 py-1.5 font-body text-sm transition-colors ${
            view === "chart" ? "bg-ink text-paper" : "text-ink/70 hover:text-ink"
          }`}
        >
          Chart
        </button>
        <button
          type="button"
          onClick={() => setView("list")}
          aria-pressed={view === "list"}
          className={`rounded-full px-4 py-1.5 font-body text-sm transition-colors ${
            view === "list" ? "bg-ink text-paper" : "text-ink/70 hover:text-ink"
          }`}
        >
          List
        </button>
      </div>

      {view === "chart" ? (
        <TimelineChart currentSemester={currentSemester} onSelect={openRole} />
      ) : (
        <div className="space-y-8">
          {EXPERIENCE_CATEGORIES.map((category) => {
            const categoryRoles = roles.filter((role) => role.category === category);
            if (categoryRoles.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="font-body text-sm font-medium uppercase tracking-wide text-ink/50">
                  {category}
                </h3>
                <div className="mt-3">
                  <RoleList roles={categoryRoles} onSelect={openRole} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      <TimelineDetailDialog role={selectedRole} onClose={closeDialog} />
    </>
  );
}
