import { ARTWORK_MOCK_DATA } from "@/model/artwork/mock";
import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";
import { usePagination } from "@/model/common/components/pagination/hook";

import { useArtworkSearchParams } from "../search/params/hook";
import type { ArtworkPreviewList } from "./type";

export const useArtworkTableItems = (): ArtworkPreviewList => {
  const [page] = usePagination();
  const [params] = useArtworkSearchParams();

  console.info(`TODO: param=${params}とpage=${page}を用いてサーバーと通信`);
  const start = (page - 1) * DEFAULT_PAGE_SIZE;
  const end = start + DEFAULT_PAGE_SIZE;

  return ARTWORK_MOCK_DATA.slice(start, end);
};
