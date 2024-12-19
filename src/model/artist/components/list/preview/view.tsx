import { Anchor, Center, SimpleGrid, Stack } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";

import { truncateText } from "@/common/lib/truncate-text";

import { artistPathMapping } from "@/model/artist/path";

import { ArtistAuthorizedPreviewView } from "../../preview/authorized";
import { ArtistIconUrlPreviewView } from "../../preview/icon-url";
import { ArtistNamePreviewView } from "../../preview/name";
import { ArtistTagsPreviewView } from "../../preview/tags";
import { ArtistPreviewTemplate } from "../../preview/template";
import type { ArtistPreviewList } from "./type";

type Props = {
  artists: ArtistPreviewList;
};

export const ArtistPreviewListView: FC<Props> = ({ artists }) => {
  return (
    <SimpleGrid
      cols={2}
      spacing={0}
      verticalSpacing={0}
      className="border-gray-4 border-t-0 border-r-0 border-b-0 border-solid"
    >
      {artists.map((artist, index) => (
        <Center
          key={artist.id}
          pt="md"
          pb="xl"
          className="border-gray-4 border-t-0 border-l-0 border-solid"
        >
          <Stack>
            <Anchor
              component={Link}
              href={artistPathMapping.idToPath(artist.id)}
              fw="bold"
              underline="never"
              className="w-fit"
            >
              {index + 1}. {truncateText(artist.adminLabel, { length: 20 })}
            </Anchor>
            <ArtistPreviewTemplate
              iconUrl={<ArtistIconUrlPreviewView value={artist.iconUrl} />}
              name={<ArtistNamePreviewView value={artist.name} />}
              authorized={
                <ArtistAuthorizedPreviewView value={artist.authorized} />
              }
              tags={<ArtistTagsPreviewView value={artist.tags} />}
            />
          </Stack>
        </Center>
      ))}
    </SimpleGrid>
  );
};
