"use client";

import { useSyncExternalStore } from "react";

// Footer renders on both static (/) and dynamic (/experience, /projects)
// routes. A plain server-computed year would get baked in at build time on
// the static route and drift from the other pages after a year boundary.
// useSyncExternalStore is the framework-supported way to render the
// server's value for the initial (SSR-matching) paint, then immediately
// resync to the browser's real clock without a hydration mismatch.
function subscribe() {
  return () => {};
}

function getSnapshot() {
  return new Date().getFullYear();
}

export default function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  return <>{year}</>;
}
