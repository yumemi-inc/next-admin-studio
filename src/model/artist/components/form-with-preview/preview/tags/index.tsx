import { ArtistTagsPreviewView } from "../../../preview/tags";
import { useArtistFormStore } from "../../store/hook";

export const ArtistTagsPreviewContainer = () => {
  const tags = useArtistFormStore((state) => state.tags);
  return <ArtistTagsPreviewView value={tags} />;
};
