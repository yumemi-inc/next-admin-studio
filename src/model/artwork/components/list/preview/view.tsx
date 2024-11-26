import { Anchor, Center, SimpleGrid, Stack } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";

import { truncateText } from "@/common/lib/truncate-text";

import { artworkPathMapping } from "@/model/artwork/path";

import { ArtworkPreviewTemplate } from "../../preview/template";
import type { ArtworkPreviewList } from "./type";

type Props = {
  artworks: ArtworkPreviewList;
};

export const ArtworkPreviewListView: FC<Props> = ({ artworks }) => {
  return (
    <SimpleGrid
      cols={2}
      spacing={0}
      verticalSpacing={0}
      className="border-gray-4 border-t-0 border-r-0 border-b-0 border-solid"
    >
      {artworks.map((artwork, index) => (
        <Center
          key={artwork.id}
          pt="md"
          pb="xl"
          className="border-gray-4 border-t-0 border-l-0 border-solid"
        >
          <Stack>
            <Anchor
              component={Link}
              href={artworkPathMapping.idToPath(artwork.id)}
              fw="bold"
              underline="never"
              className="w-fit"
            >
              {index + 1}. {truncateText(artwork.adminLabel, { length: 20 })}
            </Anchor>
            <ArtworkPreviewTemplate />
          </Stack>
        </Center>
      ))}
    </SimpleGrid>
  );
};
