import Link from "next/link";
import type { Experience } from "@/types/experience";
import { formatDateRange } from "@/lib/date";

type RoleListProps = {
  roles: Experience[];
  onSelect?: (slug: string) => void;
  linkTo?: (slug: string) => string;
};

const ROW_CLASS = "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3";
const INTERACTIVE_ROW_CLASS =
  "-mx-2 flex w-full flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded px-2 py-3 text-left transition-colors hover:bg-ink/5";

export default function RoleList({ roles, onSelect, linkTo }: RoleListProps) {
  if (roles.length === 0) {
    return <p className="font-body text-sm italic text-ink/50">None yet</p>;
  }

  return (
    <ul className="divide-y divide-ink/10">
      {roles.map((role) => {
        const content = (
          <>
            <span className="font-body text-ink">
              <span className="font-medium">{role.title}</span>{" "}
              <span className="text-ink/60">· {role.company}</span>
            </span>
            <span className="font-body text-sm text-ink/60">
              {formatDateRange(role.startDate, role.endDate)}
            </span>
          </>
        );

        return (
          <li key={role.slug}>
            {onSelect ? (
              <button
                type="button"
                onClick={() => onSelect(role.slug)}
                className={INTERACTIVE_ROW_CLASS}
              >
                {content}
              </button>
            ) : linkTo ? (
              <Link href={linkTo(role.slug)} className={INTERACTIVE_ROW_CLASS}>
                {content}
              </Link>
            ) : (
              <div className={ROW_CLASS}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
