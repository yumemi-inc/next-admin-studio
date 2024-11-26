import { ArtworkImagePreviewView } from "../../../preview/image";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkImagePreviewContainer = () => {
  const image = useArtworkFormStore((state) => state.image);
  return <ArtworkImagePreviewView value={image} />;
};
