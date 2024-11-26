import { useContext } from "react";
import { useStore } from "zustand";

import type { ContentOperation } from "@/model/common/feature/operation/const";
import { getOperationState } from "@/model/common/feature/operation/lib";

import { ArtistFormStoreContext } from "./provider";
import type { ArtistFormStore } from "./type";

export const useArtistFormStore = <T>(
  selector: (store: ArtistFormStore) => T,
): T => {
  const artistFormStoreContext = useContext(ArtistFormStoreContext);

  if (!artistFormStoreContext) {
    throw new Error(
      "useArtistFormStore must be used within ArtistFormStoreProvider",
    );
  }

  return useStore(artistFormStoreContext, selector);
};

export const useArtistFormOperationState = (
  operationType: ContentOperation,
) => {
  const isPending = useArtistFormStore((state) => state.isPending);
  const current = useArtistFormStore((state) => state.current);
  const dispatchOperation = useArtistFormStore(
    (state) => state.dispatchOperation,
  );

  return getOperationState({
    isPending,
    current,
    operationType,
    dispatchOperation,
  });
};
