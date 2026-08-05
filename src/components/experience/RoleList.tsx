import type { Experience } from "@/types/experience";
import { formatDateRange } from "@/lib/date";

type RoleListProps = {
  roles: Experience[];
};

export default function RoleList({ roles }: RoleListProps) {
  if (roles.length === 0) {
    return <p className="mt-6 font-body text-sm italic text-ink/50">None yet</p>;
  }

  return (
    <ul className="mt-6 divide-y divide-ink/10">
      {roles.map((role) => (
        <li
          key={role.slug}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
        >
          <span className="font-body text-ink">
            <span className="font-medium">{role.title}</span>{" "}
            <span className="text-ink/60">· {role.company}</span>
          </span>
          <span className="font-body text-sm text-ink/60">
            {formatDateRange(role.startDate, role.endDate)}
          </span>
        </li>
      ))}
    </ul>
  );
}
