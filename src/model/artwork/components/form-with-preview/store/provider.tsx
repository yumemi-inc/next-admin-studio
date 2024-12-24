"use client";

import { type FC, type ReactNode, createContext, useRef } from "react";

import { createArtworkFormStore } from ".";
import type { ArtworkForm } from "../form/type";

export type ArtworkFormStoreApi = ReturnType<typeof createArtworkFormStore>;

export const ArtworkFormStoreContext = createContext<
  ArtworkFormStoreApi | undefined
>(undefined);

export const ArtworkFormStoreProvider: FC<{
  children: ReactNode;
  initialState: ArtworkForm;
}> = ({ children, initialState }) => {
  const storeRef = useRef<ArtworkFormStoreApi | null>(null);
  if (!storeRef.current) {
    storeRef.current = createArtworkFormStore(initialState);
  }

  return (
    <ArtworkFormStoreContext.Provider value={storeRef.current}>
      {children}
    </ArtworkFormStoreContext.Provider>
  );
};
