import { Stack } from "@mantine/core";
import { type FC, Suspense } from "react";

import { ArtworkListPagination } from "./pagination";
import { ArtworkPreviewListContainer } from "./preview/container";
import { ArtworkListSearchForm } from "./search";
import { ArtworkListTab } from "./tab";
import { ArtworkTableListContainer } from "./table/container";
import { ArtworkTableListLoading } from "./table/loading";

export const ArtworkList: FC = () => {
  return (
    <Stack>
      <Suspense>
        <ArtworkListSearchForm />

        <ArtworkListTab
          table={
            <Suspense fallback={<ArtworkTableListLoading />}>
              <ArtworkTableListContainer />
            </Suspense>
          }
          preview={
            <Suspense>
              <ArtworkPreviewListContainer />
            </Suspense>
          }
        />

        <Suspense>
          <ArtworkListPagination />
        </Suspense>
      </Suspense>
    </Stack>
  );
};
