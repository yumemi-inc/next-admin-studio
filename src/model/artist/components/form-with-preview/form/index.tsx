import { ArtistAuthorizedInput } from "./inputs/authorized";

import { ArtistTagsInput } from "./inputs/tags";

import { ArtistNameInput } from "./inputs/name";

import type { FC } from "react";

import { ArtistAdminLabelInput } from "./inputs/admin-label";
import { ArtistFormWrapper } from "./wrapper";

export const ArtistForm: FC = () => {
  return (
    <ArtistFormWrapper>
      <ArtistAdminLabelInput />
      <ArtistNameInput />
      <ArtistTagsInput />
      <ArtistAuthorizedInput />
    </ArtistFormWrapper>
  );
};
