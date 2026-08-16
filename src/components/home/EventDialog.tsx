import Image from "next/image";
import type { Event } from "@/types/event";
import { useDialogController } from "@/lib/useDialogController";

type EventDialogProps = {
  event: Event | null;
  onClose: () => void;
};

export default function EventDialog({ event, onClose }: EventDialogProps) {
  const { dialogRef, closeOnBackdropClick } = useDialogController(event);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="event-dialog-title"
      onClick={closeOnBackdropClick}
      className="fixed inset-0 m-auto h-fit max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg bg-paper text-ink backdrop:bg-ink/40"
    >
      {event && (
        <div className="p-6">
          {event.image && (
            <Image
              src={event.image}
              alt={event.title}
              width={480}
              height={270}
              className="mb-4 h-auto w-full rounded object-cover"
            />
          )}
          <h3 id="event-dialog-title" className="font-display text-2xl">
            {event.title}
          </h3>
          {/* Intentionally the same truncated text as the card, not the full
              caption — "View post" is the only way to read the rest. */}
          <p className="mt-4 line-clamp-3 font-body leading-relaxed">{event.caption}</p>
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-body text-sm text-blue underline"
          >
            View post ↗
          </a>
        </div>
      )}
    </dialog>
  );
}
