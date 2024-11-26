import { ARTIST_MOCK_DATA } from "@/model/artist/mock";
import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";
import { usePagination } from "@/model/common/components/pagination/hook";

import { useArtistSearchParams } from "../search/params/hook";
import type { ArtistTableList } from "./type";

export const useArtistTableItems = (): ArtistTableList => {
  const [page] = usePagination();
  const [params] = useArtistSearchParams();

  console.info(`TODO: param=${params}とpage=${page}を用いてサーバーと通信`);
  const start = (page - 1) * DEFAULT_PAGE_SIZE;
  const end = start + DEFAULT_PAGE_SIZE;

  return ARTIST_MOCK_DATA.slice(start, end);
};
