import { ARTIST_MOCK_DATA } from "@/model/artist/mock";
import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";

export const useArtistListTotalPageCount = () => {
  const totalCount = ARTIST_MOCK_DATA.length;

  return Math.ceil(totalCount / DEFAULT_PAGE_SIZE);
};
