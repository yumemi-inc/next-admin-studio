import type { CommonFormSlice } from "@/model/common/store/form";

import type { ArtistAdminLabelSlice } from "../form/inputs/admin-label/slice";
import type { ArtistAuthorizedSlice } from "../form/inputs/authorized/slice";
import type { ArtistNameSlice } from "../form/inputs/name/slice";
import type { ArtistTagsSlice } from "../form/inputs/tags/slice";
import type { ArtistForm } from "../form/type";

export type ArtistFormStore = ArtistAdminLabelSlice &
  ArtistNameSlice &
  ArtistTagsSlice &
  ArtistAuthorizedSlice &
  CommonFormSlice<ArtistForm>;
