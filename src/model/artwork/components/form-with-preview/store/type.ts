import type { CommonFormSlice } from "@/model/common/store/form";

import type { ArtworkAdminLabelSlice } from "../form/inputs/admin-label/slice";
import type { ArtworkArtistSlice } from "../form/inputs/artist/slice";
import type { ArtworkConditionSlice } from "../form/inputs/condition/slice";
import type { ArtworkDescriptionSlice } from "../form/inputs/description/slice";
import type { ArtworkImageSlice } from "../form/inputs/image/slice";
import type { ArtworkOpenAtSlice } from "../form/inputs/open-at/slice";
import type { ArtworkSalesPeriodSlice } from "../form/inputs/sales-period/slice";
import type { ArtworkSalesStyleSlice } from "../form/inputs/sales-style/slice";
import type { ArtworkTitleSlice } from "../form/inputs/title/slice";
import type { ArtworkForm } from "../form/type";

export type ArtworkFormStore = ArtworkAdminLabelSlice &
  ArtworkTitleSlice &
  ArtworkDescriptionSlice &
  ArtworkArtistSlice &
  ArtworkImageSlice &
  ArtworkOpenAtSlice &
  ArtworkSalesPeriodSlice &
  ArtworkSalesStyleSlice &
  ArtworkConditionSlice &
  CommonFormSlice<ArtworkForm>;
