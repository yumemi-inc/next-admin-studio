import type { ContentStatus } from "@/model/common/const/content-status";

export type Artwork = {
  id: string;
  adminLabel: string;
  creationStatus: ContentStatus;
};
