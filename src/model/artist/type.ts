import type { ContentStatus } from "@/model/common/const/content-status";

export type Artist = {
  id: string;
  adminLabel: string;
  name: string;
  tags: string[];
  authorized: boolean;
  creationStatus: ContentStatus;
};
