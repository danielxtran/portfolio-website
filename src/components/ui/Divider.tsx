import { CONTENT_WIDTH_CLASS } from "@/lib/layout";

export default function Divider() {
  return (
    <hr className={`mx-auto my-10 w-full ${CONTENT_WIDTH_CLASS} border-t border-ink/20`} />
  );
}
