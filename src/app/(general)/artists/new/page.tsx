import type { SearchParams } from "nuqs";

import { copyAndNewParamsCache } from "@/model/common/feature/operation/copy-and-new/params";
import { ArtistFormWithPreview } from "@/model/artist/components/form-with-preview";
import { artistServerToForm } from "@/model/artist/components/form-with-preview/lib/server-to-form";
import { getArtist } from "@/model/artist/components/form-with-preview/query";
import { ARTIST_FORM_STORE_INITIAL_STATE } from "@/model/artist/components/form-with-preview/store/const";
import { ArtistFormStoreProvider } from "@/model/artist/components/form-with-preview/store/provider";

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function NewArtistPage(props: Props) {
  const { base } = await copyAndNewParamsCache.parse(props.searchParams);

  const initialState = base
    ? artistServerToForm(await getArtist(base))
    : ARTIST_FORM_STORE_INITIAL_STATE;

  return (
    <ArtistFormStoreProvider initialState={initialState}>
      <main>
        <ArtistFormWithPreview />
      </main>
    </ArtistFormStoreProvider>
  );
}
