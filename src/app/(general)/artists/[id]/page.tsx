import { ArtistFormWithPreview } from "@/model/artist/components/form-with-preview";
import { ARTIST_MOCK_DATA } from "@/model/artist/mock";

export function generateStaticParams() {
  return ARTIST_MOCK_DATA.map((artist) => ({
    id: artist.id,
  }));
}

export default function ArtistDetailPage() {
  return (
    <main>
      <ArtistFormWithPreview />
    </main>
  );
}
