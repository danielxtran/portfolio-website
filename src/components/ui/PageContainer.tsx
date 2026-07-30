import type { ReactNode } from "react";
import { CONTENT_WIDTH_CLASS } from "@/lib/layout";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className={`mx-auto flex w-full ${CONTENT_WIDTH_CLASS} flex-1 flex-col px-6 pb-20`}>
      {children}
    </main>
  );
}
