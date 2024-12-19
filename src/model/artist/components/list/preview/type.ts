import type { Artist } from "@/model/artist/type";

export type ArtistPreviewList = Pick<
  Artist,
  "id" | "adminLabel" | "iconUrl" | "name" | "authorized" | "tags"
>[];
