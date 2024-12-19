import type { FC } from "react";

import { ArtistAdminLabelInput } from "./inputs/admin-label";
import { ArtistAuthorizedInput } from "./inputs/authorized";
import { ArtistIconUrlInput } from "./inputs/icon-url";
import { ArtistNameInput } from "./inputs/name";
import { ArtistTagsInput } from "./inputs/tags";
import { ArtistFormWrapper } from "./wrapper";

export const ArtistForm: FC = () => {
  return (
    <ArtistFormWrapper>
      <ArtistAdminLabelInput />
      <ArtistNameInput />
      <ArtistIconUrlInput />
      <ArtistTagsInput />
      <ArtistAuthorizedInput />
    </ArtistFormWrapper>
  );
};
