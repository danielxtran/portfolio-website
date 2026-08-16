import { useEffect, useRef, type MouseEvent } from "react";

// Shared behavior behind every native <dialog>-based modal in this project:
// open/close synced to a nullable value, and a backdrop click (clicking the
// <dialog> element itself, not its inner content) closes it.
export function useDialogController<T>(value: T | null) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (value && !dialog.open) {
      dialog.showModal();
    } else if (!value && dialog.open) {
      dialog.close();
    }
  }, [value]);

  function closeOnBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      dialogRef.current?.close();
    }
  }

  return { dialogRef, closeOnBackdropClick };
}
