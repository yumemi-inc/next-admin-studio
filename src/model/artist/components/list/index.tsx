import { Stack } from "@mantine/core";
import { type FC, Suspense } from "react";

import { ArtistListPagination } from "./pagination";
import { ArtistPreviewListContainer } from "./preview/container";
import { ArtistListSearchForm } from "./search";
import { ArtistListTab } from "./tab";
import { ArtistTableListContainer } from "./table/container";
import { ArtistTableListLoading } from "./table/loading";

export const ArtistList: FC = () => {
  return (
    <Stack>
      <Suspense>
        <ArtistListSearchForm />

        <ArtistListTab
          table={
            <Suspense fallback={<ArtistTableListLoading />}>
              <ArtistTableListContainer />
            </Suspense>
          }
          preview={
            <Suspense>
              <ArtistPreviewListContainer />
            </Suspense>
          }
        />

        <Suspense>
          <ArtistListPagination />
        </Suspense>
      </Suspense>
    </Stack>
  );
};
