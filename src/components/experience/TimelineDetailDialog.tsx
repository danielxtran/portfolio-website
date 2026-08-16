import type { Experience } from "@/types/experience";
import { formatDateRange } from "@/lib/date";
import { useDialogController } from "@/lib/useDialogController";

type TimelineDetailDialogProps = {
  role: Experience | null;
  onClose: () => void;
};

export default function TimelineDetailDialog({ role, onClose }: TimelineDetailDialogProps) {
  const { dialogRef, closeOnBackdropClick } = useDialogController(role);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="timeline-dialog-title"
      onClick={closeOnBackdropClick}
      className="fixed inset-0 m-auto h-fit max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg bg-paper text-ink backdrop:bg-ink/40"
    >
      {role && (
        <div className="p-6">
          <p className="font-body text-xs uppercase tracking-wide text-ink/40">
            {role.category}
            {role.group ? ` · ${role.group}` : ""}
          </p>
          <h3 id="timeline-dialog-title" className="mt-1 font-display text-2xl">
            {role.title}
          </h3>
          <p className="mt-1 font-body text-sm text-ink/60">
            {role.company} · {role.location} · {formatDateRange(role.startDate, role.endDate)}
          </p>
          <p className="mt-4 font-body leading-relaxed">{role.description}</p>
        </div>
      )}
    </dialog>
  );
}
