import type { ContentStatus } from "@/model/common/const/content-status";

export type Artist = {
  id: string;
  adminLabel: string;
  creationStatus: ContentStatus;
};
