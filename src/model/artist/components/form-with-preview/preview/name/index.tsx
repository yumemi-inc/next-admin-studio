import { ArtistNamePreviewView } from "../../../preview/name";
import { useArtistFormStore } from "../../store/hook";

export const ArtistNamePreviewContainer = () => {
  const name = useArtistFormStore((state) => state.name);
  return <ArtistNamePreviewView value={name} />;
};
