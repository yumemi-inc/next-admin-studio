"use client";

import { Flex, Tooltip } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import type { FC } from "react";

import { artistPathMapping } from "@/model/artist/path";
import { ContentFormFooterTamplate } from "@/model/common/components/content-form-footer-template";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import { useArtistContentStatus } from "../../hooks/content-status";
import { CancelTemporaryCloseArtistButton } from "./operation/cancel-temporary-close/button";
import { ConfirmDraftArtistFormButton } from "./operation/confirm-draft/button";
import { CreateConfirmedArtistFormButton } from "./operation/create-confirmed/button";
import { CreateDraftArtistFormButton } from "./operation/create-draft/button";
import { EditConfirmedArtistFormButton } from "./operation/edit-confirmed/button";
import { EditDraftArtistFormButton } from "./operation/edit-draft/button";
import { TemporarilyCloseArtistFormButton } from "./operation/temporarily-close/button";

export const ArtistFormFooter: FC = () => {
  const pathname = usePathname();
  const contentId = artistPathMapping.pathToId(pathname) ?? NEW_ITEM_ID;
  const status = useArtistContentStatus(contentId);

  return (
    <ContentFormFooterTamplate
      status={status}
      footer={{
        onNew: <NewArtistFormFooter />,
        onDraft: <DraftArtistFormFooter />,
        onConfirmed: <ConfirmedArtistFormFooter />,
        onTemporarilyClosed: <TemporarilyClosedArtistFormFooter />,
      }}
    />
  );
};

const FOOTER_STYLE = {
  borderTop: "1px solid #ccc",
};

const NewArtistFormFooter: FC = () => {
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
        <CreateDraftArtistFormButton />
        <CreateConfirmedArtistFormButton />
      </Flex>
    </Flex>
  );
};

const DraftArtistFormFooter: FC = () => {
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
        <EditDraftArtistFormButton />
        <ConfirmDraftArtistFormButton />
      </Flex>
    </Flex>
  );
};

const ConfirmedArtistFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <TemporarilyCloseArtistFormButton />

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
      <EditConfirmedArtistFormButton />
    </Flex>
  );
};

const TemporarilyClosedArtistFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <CancelTemporaryCloseArtistButton />
        <Tooltip
          label="再公開すると、公開期間内であればアプリ上に現れるようになります😄"
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <EditConfirmedArtistFormButton />
    </Flex>
  );
};
