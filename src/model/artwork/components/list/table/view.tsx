import { Anchor, Table } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";

import { truncateText } from "@/common/lib/truncate-text";

import { artworkPathMapping } from "@/model/artwork/path";

import { ArtworkTableHead } from "./head";
import type { ArtworkTableList } from "./type";

type Props = {
  artworks: ArtworkTableList;
};

export const ArtworkTableListView: FC<Props> = ({ artworks }) => {
  return (
    <Table>
      <ArtworkTableHead />

      <Table.Tbody className="animate-table-fade-in">
        {artworks.map((artwork, index) => (
          <Table.Tr key={artwork.id}>
            <Table.Td className="text-center text-gray-6" width={12}>
              {index + 1}
            </Table.Td>
            <Table.Td width={400}>
              <Anchor
                component={Link}
                href={artworkPathMapping.idToPath(artwork.id)}
                fw="bold"
              >
                {truncateText(artwork.adminLabel, { length: 32 })}
              </Anchor>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
