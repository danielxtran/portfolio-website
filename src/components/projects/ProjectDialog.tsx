import Image from "next/image";
import type { Project } from "@/types/project";
import { formatDateRange } from "@/lib/date";
import { useDialogController } from "@/lib/useDialogController";

type ProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const { dialogRef, closeOnBackdropClick } = useDialogController(project);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="project-dialog-title"
      onClick={closeOnBackdropClick}
      className="fixed inset-0 m-auto h-fit max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg bg-paper text-ink backdrop:bg-ink/40"
    >
      {project && (
        <div className="p-6">
          <h3 id="project-dialog-title" className="font-display text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 font-body text-sm text-ink/60">
            {project.company} · {project.location} ·{" "}
            {formatDateRange(project.startDate, project.endDate)}
          </p>
          <p className="mt-4 font-body leading-relaxed">{project.description}</p>

          {project.images && project.images.length > 0 && (
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {project.images.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${project.title} screenshot`}
                  width={240}
                  height={160}
                  className="h-40 w-60 flex-none rounded object-cover"
                />
              ))}
            </div>
          )}

          {project.links && project.links.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-blue underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </dialog>
  );
}
