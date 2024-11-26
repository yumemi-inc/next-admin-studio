import type { Artwork } from "@/model/artwork/type";

export type ArtworkPreviewList = Pick<Artwork, "id" | "adminLabel">[];
