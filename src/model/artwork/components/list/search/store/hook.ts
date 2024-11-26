import { useContext } from "react";
import { useStore } from "zustand";

import type { ArtworkSearchForm } from "../inputs/type";
import { artworkListSearchParamToForm } from "../lib/param-to-form";
import { useArtworkSearchParams } from "../params/hook";
import { ArtworkSearchStoreContext } from "./provider";
import type { ArtworkSearchStore } from "./type";

export const useArtworkSearchStore = <T>(
  selector: (store: ArtworkSearchStore) => T,
): T => {
  const artworkSearchStoreContext = useContext(ArtworkSearchStoreContext);

  if (!artworkSearchStoreContext) {
    throw new Error(
      "useArtworkSearchStore must be used within a ArtworkSearchStoreProvider",
    );
  }
  return useStore(artworkSearchStoreContext, selector);
};

export const useArtworkSearchStoreInitialValue = (): ArtworkSearchForm => {
  const [params] = useArtworkSearchParams();
  return artworkListSearchParamToForm(params);
};
