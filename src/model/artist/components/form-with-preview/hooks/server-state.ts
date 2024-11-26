import { getArtist } from "../query";

export const useArtistServerState = (id: string) => {
  // TanstackやURQLなど、キャッシュの更新機能があるライブラリを使うと良い
  return getArtist(id);
};
