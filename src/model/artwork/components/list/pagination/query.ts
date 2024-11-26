import { ARTWORK_MOCK_DATA } from "@/model/artwork/mock";
import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";

export const useArtworkListTotalPageCount = () => {
  const totalCount = ARTWORK_MOCK_DATA.length;

  return Math.ceil(totalCount / DEFAULT_PAGE_SIZE);
};
