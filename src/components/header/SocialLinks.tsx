import { FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./brand-icons";

const EMAIL = "PLACEHOLDER_EMAIL@example.com";
const LINKEDIN_URL = "#";
const GITHUB_URL = "#";

const ICON_CLASS = "h-7 w-7";
const LINK_CLASS = "text-ink transition-colors hover:text-blue";

export default function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex items-center gap-4">
      <a href={`mailto:${EMAIL}`} aria-label="Email Daniel" className={LINK_CLASS}>
        <Mail className={ICON_CLASS} />
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Daniel's LinkedIn"
        className={LINK_CLASS}
      >
        <LinkedInIcon className={ICON_CLASS} />
      </a>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Daniel's GitHub"
        className={LINK_CLASS}
      >
        <GithubIcon className={ICON_CLASS} />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Daniel's resume"
        className={LINK_CLASS}
      >
        <FileText className={ICON_CLASS} />
      </a>
    </nav>
  );
}
