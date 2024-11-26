import {
  CONTENT_STATUS,
  type ContentStatus,
} from "@/model/common/const/content-status";

import { useArtworkServerState } from "./server-state";

export const useArtworkContentStatus = (id: string): ContentStatus => {
  const serverState = useArtworkServerState(id);
  return serverState?.creationStatus ?? CONTENT_STATUS.NEW;
};
