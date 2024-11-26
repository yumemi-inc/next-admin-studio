import type { Artist } from "../../../type";

export type ArtistTableList = Pick<Artist, "id" | "adminLabel">[];
