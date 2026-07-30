import { FaFileLines, FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6";
import { siteConfig } from "@/config/site";

const ICON_CLASS = "h-7 w-7";
const LINK_CLASS = "text-ink transition-colors hover:text-blue";

const LINKS = [
  {
    href: `mailto:${siteConfig.email}`,
    label: "Email Daniel",
    icon: FaRegEnvelope,
    external: false,
  },
  {
    href: siteConfig.linkedinUrl,
    label: "Daniel's LinkedIn",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    href: siteConfig.githubUrl,
    label: "Daniel's GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    href: siteConfig.resumeHref,
    label: "Daniel's resume",
    icon: FaFileLines,
    external: true,
  },
] as const;

export default function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex items-center gap-4">
      {LINKS.map(({ href, label, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={LINK_CLASS}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <Icon className={ICON_CLASS} />
        </a>
      ))}
    </nav>
  );
}
