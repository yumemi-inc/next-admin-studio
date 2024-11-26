import { ArtistSearchStoreProvider } from "@/model/artist/components/list/search/store/provider";
import { type PropsWithChildren, Suspense } from "react";

export default function ArtistListLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <Suspense>
      <ArtistSearchStoreProvider>
        {children}
      </ArtistSearchStoreProvider>
    </Suspense>
  );
}
