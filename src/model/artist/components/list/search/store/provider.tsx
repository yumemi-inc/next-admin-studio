"use client";

import { type FC, createContext, useRef } from "react";

import { createArtistSearchStore } from "../store";
import { useArtistSearchStoreInitialValue } from "./hook";

export const ArtistSearchStoreContext = createContext<
  ReturnType<typeof createArtistSearchStore> | undefined
>(undefined);

export const ArtistSearchStoreProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const storeRef = useRef<ReturnType<typeof createArtistSearchStore>>(null);
  const initialState = useArtistSearchStoreInitialValue();

  if (!storeRef.current) {
    storeRef.current = createArtistSearchStore(initialState);
  }

  return (
    <ArtistSearchStoreContext.Provider value={storeRef.current}>
      {children}
    </ArtistSearchStoreContext.Provider>
  );
};
