import type { SearchParams } from "nuqs";

import { ArtworkFormWithPreview } from "@/model/artwork/components/form-with-preview";
import { artworkServerToForm } from "@/model/artwork/components/form-with-preview/lib/server-to-form";
import { getArtwork } from "@/model/artwork/components/form-with-preview/query";
import { ARTWORK_FORM_STORE_INITIAL_STATE } from "@/model/artwork/components/form-with-preview/store/const";
import { ArtworkFormStoreProvider } from "@/model/artwork/components/form-with-preview/store/provider";
import { copyAndNewParamsCache } from "@/model/common/feature/operation/copy-and-new/params";

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function NewArtworkPage(props: Props) {
  const { base } = await copyAndNewParamsCache.parse(props.searchParams);

  const initialState = base
    ? artworkServerToForm(await getArtwork(base))
    : ARTWORK_FORM_STORE_INITIAL_STATE;

  return (
    <ArtworkFormStoreProvider initialState={initialState}>
      <main>
        <ArtworkFormWithPreview />
      </main>
    </ArtworkFormStoreProvider>
  );
}
