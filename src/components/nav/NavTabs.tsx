import NavTab from "./NavTab";

const TABS = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
] as const;

export default function NavTabs() {
  return (
    <nav aria-label="Primary" className="flex items-center justify-center gap-2 px-6 pb-6">
      {TABS.map((tab) => (
        <NavTab key={tab.href} href={tab.href} label={tab.label} />
      ))}
    </nav>
  );
}
