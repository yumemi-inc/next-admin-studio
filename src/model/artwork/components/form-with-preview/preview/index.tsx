import { ArtworkPreviewTemplate } from "../../preview/template";
import { ArtworkArtistPreviewContainer } from "./artist";
import { ArtworkConditionPreviewContainer } from "./condition";
import { ArtworkDescriptionPreviewContainer } from "./description";
import { ArtworkImagePreviewContainer } from "./image";
import { ArtworkSalesPeriodPreviewContainer } from "./sales-period";
import { ArtworkSalesStylePreviewContainer } from "./sales-style";
import { ArtworkTitlePreviewContainer } from "./title";

export const ArtworkFormPreview = () => {
  return (
    <ArtworkPreviewTemplate
      title={<ArtworkTitlePreviewContainer />}
      description={<ArtworkDescriptionPreviewContainer />}
      artist={<ArtworkArtistPreviewContainer />}
      image={<ArtworkImagePreviewContainer />}
      condition={<ArtworkConditionPreviewContainer />}
      salesStyle={<ArtworkSalesStylePreviewContainer />}
      salesPeriod={<ArtworkSalesPeriodPreviewContainer />}
    />
  );
};
