import { useContext } from "react";
import { useStore } from "zustand";

import type { ContentOperation } from "@/model/common/feature/operation/const";
import { getOperationState } from "@/model/common/feature/operation/lib";

import { ArtworkFormStoreContext } from "./provider";
import type { ArtworkFormStore } from "./type";

export const useArtworkFormStore = <T>(
  selector: (store: ArtworkFormStore) => T,
): T => {
  const artworkFormStoreContext = useContext(ArtworkFormStoreContext);

  if (!artworkFormStoreContext) {
    throw new Error(
      "useArtworkFormStore must be used within ArtworkFormStoreProvider",
    );
  }

  return useStore(artworkFormStoreContext, selector);
};

export const useArtworkFormOperationState = (
  operationType: ContentOperation,
) => {
  const isPending = useArtworkFormStore((state) => state.isPending);
  const current = useArtworkFormStore((state) => state.current);
  const dispatchOperation = useArtworkFormStore(
    (state) => state.dispatchOperation,
  );

  return getOperationState({
    isPending,
    current,
    operationType,
    dispatchOperation,
  });
};
