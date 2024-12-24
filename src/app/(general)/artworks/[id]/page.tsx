import { ArtworkFormWithPreview } from "@/model/artwork/components/form-with-preview";
import { ARTWORK_MOCK_DATA } from "@/model/artwork/mock";

export function generateStaticParams() {
  return ARTWORK_MOCK_DATA.map((artwork) => ({
    id: artwork.id,
  }));
}

export default function ArtworkDetailPage() {
  return (
    <main>
      <ArtworkFormWithPreview />
    </main>
  );
}
