import { ArtworkConditionInput } from "./inputs/condition";

import { ArtworkSalesStyleInput } from "./inputs/sales-style";

import { ArtworkSalesPeriodInput } from "./inputs/sales-period";

import { ArtworkOpenAtInput } from "./inputs/open-at";

import { ArtworkImageInput } from "./inputs/image";

import { ArtworkArtistInput } from "./inputs/artist";

import { ArtworkDescriptionInput } from "./inputs/description";

import { ArtworkTitleInput } from "./inputs/title";

import type { FC } from "react";

import { ArtworkAdminLabelInput } from "./inputs/admin-label";
import { ArtworkFormWrapper } from "./wrapper";

export const ArtworkForm: FC = () => {
  return (
    <ArtworkFormWrapper>
      <ArtworkAdminLabelInput />
      <ArtworkTitleInput />
      <ArtworkDescriptionInput />
      <ArtworkArtistInput />
      <ArtworkImageInput />
      <ArtworkOpenAtInput />
      <ArtworkSalesPeriodInput />
      <ArtworkSalesStyleInput />
      <ArtworkConditionInput />
    </ArtworkFormWrapper>
  );
};
