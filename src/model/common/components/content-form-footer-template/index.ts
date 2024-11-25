import type { FC, ReactNode } from "react";

import { match } from "ts-pattern";
import { CONTENT_STATUS, type ContentStatus } from "../../const/content-status";

type Props = {
  status: ContentStatus | undefined;
  footer: {
    onNew: ReactNode;
    onDraft: ReactNode;
    onConfirmed: ReactNode;
    onTemporarilyClosed: ReactNode;
  };
};

export const ContentFormFooterTamplate: FC<Props> = ({ status, footer }) => {
  return match(status)
    .with(undefined, () => footer.onNew)
    .with(CONTENT_STATUS.NEW, () => footer.onNew)
    .with(CONTENT_STATUS.DRAFT, () => footer.onDraft)
    .with(CONTENT_STATUS.CONFIRMED, () => footer.onConfirmed)
    .with(CONTENT_STATUS.TEMPORARILY_CLOSED, () => footer.onTemporarilyClosed)
    .exhaustive();
};
