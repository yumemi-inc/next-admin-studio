import type { FC } from "react";

import { ArtworkAdminLabelInput } from "./inputs/admin-label";
import { ArtworkArtistInput } from "./inputs/artist";
import { ArtworkConditionInput } from "./inputs/condition";
import { ArtworkDescriptionInput } from "./inputs/description";
import { ArtworkImageInput } from "./inputs/image";
import { ArtworkOpenAtInput } from "./inputs/open-at";
import { ArtworkSalesPeriodInput } from "./inputs/sales-period";
import { ArtworkSalesStyleInput } from "./inputs/sales-style";
import { ArtworkTitleInput } from "./inputs/title";
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
