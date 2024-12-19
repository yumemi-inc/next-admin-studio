import { ArtistPreviewTemplate } from "../../preview/template";
import { ArtistAuthorizedPreviewContainer } from "./authorized";
import { ArtistIconUrlPreviewContainer } from "./icon-url";
import { ArtistNamePreviewContainer } from "./name";
import { ArtistTagsPreviewContainer } from "./tags";

export const ArtistFormPreview = () => {
  return (
    <ArtistPreviewTemplate
      authorized={<ArtistAuthorizedPreviewContainer />}
      iconUrl={<ArtistIconUrlPreviewContainer />}
      name={<ArtistNamePreviewContainer />}
      tags={<ArtistTagsPreviewContainer />}
    />
  );
};
