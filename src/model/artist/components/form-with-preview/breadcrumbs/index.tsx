"use client";

import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { truncateText } from "@/common/lib/truncate-text";

import { artistPathMapping } from "@/model/artist/path";
import { MODELS } from "@/model/common/const";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import { useArtistFormStore } from "../store/hook";

export const ArtistFormWithPreviewBreadcrumbs = () => {
  const pathname = usePathname();
  const adminLabel = useArtistFormStore((state) => state.adminLabel);

  const contentId = artistPathMapping.pathToId(pathname);
  const isNewItemPagePath = contentId === NEW_ITEM_ID;
  const current = isNewItemPagePath ? "新規作成" : adminLabel;

  return (
    <Breadcrumbs>
      <Anchor href={artistPathMapping.indexPath} component={Link}>
        {MODELS.Artist.label}一覧
      </Anchor>
      <Text>
        {truncateText(current) || <span className="text-gray-5">Untitled</span>}
      </Text>
    </Breadcrumbs>
  );
};
