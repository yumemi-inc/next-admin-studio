"use client";

import { useRouter } from "next/navigation";
import type { FC, ReactNode } from "react";

import { ListTab } from "@/model/common/components/list-tab";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import { artistPathMapping } from "../../path";

type Props = {
  table: ReactNode;
  preview: ReactNode;
};

export const ArtistListTab: FC<Props> = ({ table, preview }) => {
  const router = useRouter();

  const onCreateNew = () => {
    router.push(artistPathMapping.idToPath(NEW_ITEM_ID));
  };

  return (
    <ListTab
      renderTable={() => table}
      renderPreviewList={() => preview}
      onCreateNew={onCreateNew}
    />
  );
};
