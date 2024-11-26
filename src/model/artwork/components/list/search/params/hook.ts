import { useQueryStates } from "nuqs";
import { artworkSearchParams } from ".";

export const useArtworkSearchParams = () => {
  return useQueryStates(artworkSearchParams);
};
