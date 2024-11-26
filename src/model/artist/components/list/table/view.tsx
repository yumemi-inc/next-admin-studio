import { Anchor, Table } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";

import { truncateText } from "@/common/lib/truncate-text";

import { artistPathMapping } from "@/model/artist/path";

import { ArtistTableHead } from "./head";
import type { ArtistTableList } from "./type";

type Props = {
  artists: ArtistTableList;
};

export const ArtistTableListView: FC<Props> = ({ artists }) => {
  return (
    <Table>
      <ArtistTableHead />

      <Table.Tbody className="animate-table-fade-in">
        {artists.map((artist, index) => (
          <Table.Tr key={artist.id}>
            <Table.Td className="text-center text-gray-6" width={12}>
              {index + 1}
            </Table.Td>
            <Table.Td width={400}>
              <Anchor
                component={Link}
                href={artistPathMapping.idToPath(artist.id)}
                fw="bold"
              >
                {truncateText(artist.adminLabel, { length: 32 })}
              </Anchor>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
