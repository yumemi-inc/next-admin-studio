import { getArtwork } from "../query";

export const useArtworkServerState = (id: string) => {
  // TanstackやURQLなど、キャッシュの更新機能があるライブラリを使うと良い
  return getArtwork(id);
};
