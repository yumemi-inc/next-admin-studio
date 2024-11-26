import { ArtworkSearchStoreProvider } from "@/model/artwork/components/list/search/store/provider";
import { type PropsWithChildren, Suspense } from "react";

export default function ArtworkListLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <Suspense>
      <ArtworkSearchStoreProvider>{children}</ArtworkSearchStoreProvider>
    </Suspense>
  );
}
