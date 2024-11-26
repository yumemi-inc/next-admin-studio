import { ArtworkOpenAtPreviewView } from "../../../preview/open-at";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkOpenAtPreviewContainer = () => {
  const value = useArtworkFormStore((state) => state.openAt);
  return <ArtworkOpenAtPreviewView value={value} />;
};
