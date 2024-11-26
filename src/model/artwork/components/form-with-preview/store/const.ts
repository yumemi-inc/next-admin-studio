import { ARTWORK_ADMIN_LABEL_DEFAULT_VALUE } from "../form/inputs/admin-label/const";
import { ARTWORK_ARTIST_DEFAULT_VALUE } from "../form/inputs/artist/const";
import { ARTWORK_CONDITION_DEFAULT_VALUE } from "../form/inputs/condition/const";
import { ARTWORK_DESCRIPTION_DEFAULT_VALUE } from "../form/inputs/description/const";
import { ARTWORK_IMAGE_DEFAULT_VALUE } from "../form/inputs/image/const";
import { ARTWORK_OPEN_AT_DEFAULT_VALUE } from "../form/inputs/open-at/const";
import { ARTWORK_SALES_PERIOD_DEFAULT_VALUE } from "../form/inputs/sales-period/const";
import { ARTWORK_SALES_STYLE_DEFAULT_VALUE } from "../form/inputs/sales-style/const";
import { ARTWORK_AUCTION_STARTING_PRICE_DEFAULT_VALUE } from "../form/inputs/sales-style/input/auction/const";
import { ARTWORK_FIXED_PRICE_DEFAULT_VALUE } from "../form/inputs/sales-style/input/fixed-price/const";
import { ARTWORK_TITLE_DEFAULT_VALUE } from "../form/inputs/title/const";
import type { ArtworkForm } from "../form/type";

export const ARTWORK_FORM_STORE_INITIAL_STATE: ArtworkForm = {
  adminLabel: ARTWORK_ADMIN_LABEL_DEFAULT_VALUE,
  title: ARTWORK_TITLE_DEFAULT_VALUE,
  description: ARTWORK_DESCRIPTION_DEFAULT_VALUE,
  artist: ARTWORK_ARTIST_DEFAULT_VALUE,
  image: ARTWORK_IMAGE_DEFAULT_VALUE,
  openAt: ARTWORK_OPEN_AT_DEFAULT_VALUE,
  salesPeriod: ARTWORK_SALES_PERIOD_DEFAULT_VALUE,
  salesStyle: ARTWORK_SALES_STYLE_DEFAULT_VALUE,
  condition: ARTWORK_CONDITION_DEFAULT_VALUE,
  fixedPrice: ARTWORK_FIXED_PRICE_DEFAULT_VALUE,
  auctionStartingPrice: ARTWORK_AUCTION_STARTING_PRICE_DEFAULT_VALUE,
};
