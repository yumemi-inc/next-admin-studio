"use client";

import { type FC, createContext, useRef } from "react";

import { createArtworkSearchStore } from "../store";
import { useArtworkSearchStoreInitialValue } from "./hook";

export const ArtworkSearchStoreContext = createContext<
  ReturnType<typeof createArtworkSearchStore> | undefined
>(undefined);

export const ArtworkSearchStoreProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const storeRef = useRef<ReturnType<typeof createArtworkSearchStore>>(null);
  const initialState = useArtworkSearchStoreInitialValue();

  if (!storeRef.current) {
    storeRef.current = createArtworkSearchStore(initialState);
  }

  return (
    <ArtworkSearchStoreContext.Provider value={storeRef.current}>
      {children}
    </ArtworkSearchStoreContext.Provider>
  );
};
