import type { Artwork } from "@/model/artwork/type";

export type ArtworkPreviewList = Pick<
  Artwork,
  | "id"
  | "adminLabel"
  | "artist"
  | "description"
  | "image"
  | "salesPeriod"
  | "condition"
  | "salesStyle"
  | "title"
>[];
