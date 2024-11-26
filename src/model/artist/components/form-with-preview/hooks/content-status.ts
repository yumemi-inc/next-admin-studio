import {
  CONTENT_STATUS,
  type ContentStatus,
} from "@/model/common/const/content-status";

import { useArtistServerState } from "./server-state";

export const useArtistContentStatus = (id: string): ContentStatus => {
  const serverState = useArtistServerState(id);
  return serverState?.creationStatus ?? CONTENT_STATUS.NEW;
};
