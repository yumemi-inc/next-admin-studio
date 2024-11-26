import { useQueryStates } from "nuqs";
import { artistSearchParams } from ".";

export const useArtistSearchParams = () => {
  return useQueryStates(artistSearchParams);
};
