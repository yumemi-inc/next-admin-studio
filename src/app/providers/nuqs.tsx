import { NuqsAdapter } from "nuqs/adapters/next/app";

export const NuqsProvider = ({ children }: { children: React.ReactNode }) => {
  return <NuqsAdapter>{children}</NuqsAdapter>;
};
