"use client";

import { Divider, Flex, Title } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import type { FC } from "react";

import { artistPathMapping } from "@/model/artist/path";
import { FormMenuButton } from "@/model/common/components/form-menu";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import { useArtistServerState } from "../../hooks/server-state";
import { artistServerToForm } from "../../lib/server-to-form";
import { ARTIST_FORM_STORE_INITIAL_STATE } from "../../store/const";
import { useArtistFormStore } from "../../store/hook";
import { deleteArtist } from "./operation/delete/query";

export const ArtistFormHeader: FC = () => {
  const pathname = usePathname();
  const contentId = artistPathMapping.pathToId(pathname) ?? NEW_ITEM_ID;
  const router = useRouter();
  const serverState = useArtistServerState(contentId);
  const setFormValue = useArtistFormStore((state) => state.setFormValue);

  const isNewItem = contentId === NEW_ITEM_ID;
  const title = `アーティスト ${isNewItem ? "新規作成" : "詳細"}`;

  const isDraft = serverState?.creationStatus === "DRAFT";

  const onDelete = async () => {
    await deleteArtist(contentId);
  };

  const onReset = () => {
    setFormValue(ARTIST_FORM_STORE_INITIAL_STATE);
    if (!isNewItem) {
      // もともとの値を復元する
      setFormValue(artistServerToForm(serverState));
    }
  };

  const onCopyAndNew = () => {
    router.push(`${artistPathMapping.idToPath(NEW_ITEM_ID)}?base=${contentId}`);
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
