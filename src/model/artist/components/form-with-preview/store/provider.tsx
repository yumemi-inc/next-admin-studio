"use client";

import { type FC, type ReactNode, createContext, useRef } from "react";

import { createArtistFormStore } from ".";
import type { ArtistForm } from "../form/type";

export type ArtistFormStoreApi = ReturnType<typeof createArtistFormStore>;

export const ArtistFormStoreContext = createContext<
  ArtistFormStoreApi | undefined
>(undefined);

export const ArtistFormStoreProvider: FC<{
  children: ReactNode;
  initialState: ArtistForm;
}> = ({ children, initialState }) => {
  const storeRef = useRef<ArtistFormStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createArtistFormStore(initialState);
  }

  return (
    <ArtistFormStoreContext.Provider value={storeRef.current}>
      {children}
    </ArtistFormStoreContext.Provider>
  );
};
