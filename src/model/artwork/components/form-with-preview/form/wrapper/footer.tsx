"use client";

import { Flex, Tooltip } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import type { FC } from "react";

import { artworkPathMapping } from "@/model/artwork/path";
import { ContentFormFooterTamplate } from "@/model/common/components/content-form-footer-template";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import { useArtworkContentStatus } from "../../hooks/content-status";
import { CancelTemporaryCloseArtworkButton } from "./operation/cancel-temporary-close/button";
import { ConfirmDraftArtworkFormButton } from "./operation/confirm-draft/button";
import { CreateConfirmedArtworkFormButton } from "./operation/create-confirmed/button";
import { CreateDraftArtworkFormButton } from "./operation/create-draft/button";
import { EditConfirmedArtworkFormButton } from "./operation/edit-confirmed/button";
import { EditDraftArtworkFormButton } from "./operation/edit-draft/button";
import { TemporarilyCloseArtworkFormButton } from "./operation/temporarily-close/button";

export const ArtworkFormFooter: FC = () => {
  const pathname = usePathname();
  const contentId = artworkPathMapping.pathToId(pathname) ?? NEW_ITEM_ID;
  const status = useArtworkContentStatus(contentId);

  return (
    <ContentFormFooterTamplate
      status={status}
      footer={{
        onNew: <NewArtworkFormFooter />,
        onDraft: <DraftArtworkFormFooter />,
        onConfirmed: <ConfirmedArtworkFormFooter />,
        onTemporarilyClosed: <TemporarilyClosedArtworkFormFooter />,
      }}
    />
  );
};

const FOOTER_STYLE = {
  borderTop: "1px solid #ccc",
};

const NewArtworkFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Tooltip
          label={
            <span>
              下書きはアプリに表示されません
              <br />
              確定保存の後も一部内容は編集可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <Flex align="center" gap="sm">
        <CreateDraftArtworkFormButton />
        <CreateConfirmedArtworkFormButton />
      </Flex>
    </Flex>
  );
};

const DraftArtworkFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Tooltip
          label={
            <span>
              下書きはアプリに表示されません
              <br />
              確定保存の後も一部内容は編集可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <Flex align="center" gap="sm">
        <EditDraftArtworkFormButton />
        <ConfirmDraftArtworkFormButton />
      </Flex>
    </Flex>
  );
};

const ConfirmedArtworkFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <TemporarilyCloseArtworkFormButton />

        <Tooltip
          label={
            <span>
              公開停止するとアプリ上に現れなくなります
              <br />
              公開停止後も再公開は可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>
      <EditConfirmedArtworkFormButton />
    </Flex>
  );
};

const TemporarilyClosedArtworkFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <CancelTemporaryCloseArtworkButton />
        <Tooltip
          label="再公開すると、公開期間内であればアプリ上に現れるようになります😄"
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <EditConfirmedArtworkFormButton />
    </Flex>
  );
};
