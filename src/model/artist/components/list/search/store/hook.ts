import { useContext } from "react";
import { useStore } from "zustand";

import type { ArtistSearchForm } from "../inputs/type";
import { artistListSearchParamToForm } from "../lib/param-to-form";
import { useArtistSearchParams } from "../params/hook";
import { ArtistSearchStoreContext } from "./provider";
import type { ArtistSearchStore } from "./type";

export const useArtistSearchStore = <T>(
  selector: (store: ArtistSearchStore) => T,
): T => {
  const artistSearchStoreContext = useContext(ArtistSearchStoreContext);

  if (!artistSearchStoreContext) {
    throw new Error(
      "useArtistSearchStore must be used within a ArtistSearchStoreProvider",
    );
  }
  return useStore(artistSearchStoreContext, selector);
};

export const useArtistSearchStoreInitialValue = (): ArtistSearchForm => {
  const [params] = useArtistSearchParams();
  return artistListSearchParamToForm(params);
};
