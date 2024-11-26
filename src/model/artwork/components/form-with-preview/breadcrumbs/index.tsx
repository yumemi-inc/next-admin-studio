"use client";

import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { truncateText } from "@/common/lib/truncate-text";

import { artworkPathMapping } from "@/model/artwork/path";
import { MODELS } from "@/model/common/const";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import { useArtworkFormStore } from "../store/hook";

export const ArtworkFormWithPreviewBreadcrumbs = () => {
  const pathname = usePathname();
  const adminLabel = useArtworkFormStore((state) => state.adminLabel);

  const contentId = artworkPathMapping.pathToId(pathname);
  const isNewItemPagePath = contentId === NEW_ITEM_ID;
  const current = isNewItemPagePath ? "新規作成" : adminLabel;

  return (
    <Breadcrumbs>
      <Anchor href={artworkPathMapping.indexPath} component={Link}>
        {MODELS.Artwork.label}一覧
      </Anchor>
      <Text>
        {truncateText(current) || <span className="text-gray-5">Untitled</span>}
      </Text>
    </Breadcrumbs>
  );
};
