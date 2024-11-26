import { ARTIST_AUTHORIZED_DEFAULT_VALUE } from "../form/inputs/authorized/const";

import { ARTIST_TAGS_DEFAULT_VALUE } from "../form/inputs/tags/const";

import { ARTIST_NAME_DEFAULT_VALUE } from "../form/inputs/name/const";

import { ARTIST_ADMIN_LABEL_DEFAULT_VALUE } from "../form/inputs/admin-label/const";
import type { ArtistForm } from "../form/type";

export const ARTIST_FORM_STORE_INITIAL_STATE: ArtistForm = {
  adminLabel: ARTIST_ADMIN_LABEL_DEFAULT_VALUE,
  name: ARTIST_NAME_DEFAULT_VALUE,
  tags: ARTIST_TAGS_DEFAULT_VALUE,
  authorized: ARTIST_AUTHORIZED_DEFAULT_VALUE,
};
