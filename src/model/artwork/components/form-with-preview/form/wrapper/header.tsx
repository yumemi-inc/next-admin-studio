"use client";

import { Divider, Flex, Title } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import type { FC } from "react";

import { artworkPathMapping } from "@/model/artwork/path";
import { FormMenuButton } from "@/model/common/components/form-menu";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import { useArtworkServerState } from "../../hooks/server-state";
import { artworkServerToForm } from "../../lib/server-to-form";
import { ARTWORK_FORM_STORE_INITIAL_STATE } from "../../store/const";
import { useArtworkFormStore } from "../../store/hook";
import { deleteArtwork } from "./operation/delete/query";

export const ArtworkFormHeader: FC = () => {
  const pathname = usePathname();
  const contentId = artworkPathMapping.pathToId(pathname) ?? NEW_ITEM_ID;
  const router = useRouter();
  const serverState = useArtworkServerState(contentId);
  const setFormValue = useArtworkFormStore((state) => state.setFormValue);

  const isNewItem = contentId === NEW_ITEM_ID;
  const title = `作品 ${isNewItem ? "新規作成" : "詳細"}`;

  const isDraft = serverState?.creationStatus === "DRAFT";

  const onDelete = async () => {
    await deleteArtwork(contentId);
  };

  const onReset = () => {
    setFormValue(ARTWORK_FORM_STORE_INITIAL_STATE);
    if (!isNewItem) {
      // もともとの値を復元する
      setFormValue(artworkServerToForm(serverState));
    }
  };

  const onCopyAndNew = () => {
    router.push(
      `${artworkPathMapping.idToPath(NEW_ITEM_ID)}?base=${contentId}`,
    );
  };

  return (
    <>
      <Flex justify="space-between" align="center" p="lg">
        <Title order={3}>{title}</Title>
        <FormMenuButton
          onDelete={onDelete}
          onReset={onReset}
          isDeletable={isDraft}
          isCopyable={!isNewItem}
          onCopyAndNew={onCopyAndNew}
        />
      </Flex>
      <Divider />
    </>
  );
};
