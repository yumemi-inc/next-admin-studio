import type { FC, PropsWithChildren } from "react";

import { ContentFormTemplate } from "@/model/common/components/content-form-template";

import { ArtworkFormFooter } from "./footer";
import { ArtworkFormHeader } from "./header";

export const ArtworkFormWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ContentFormTemplate
      header={<ArtworkFormHeader />}
      footer={<ArtworkFormFooter />}
    >
      {children}
    </ContentFormTemplate>
  );
};
