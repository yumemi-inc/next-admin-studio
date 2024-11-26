import type { FC, PropsWithChildren } from "react";

import { ContentFormTemplate } from "@/model/common/components/content-form-template";

import { ArtistFormFooter } from "./footer";
import { ArtistFormHeader } from "./header";

export const ArtistFormWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ContentFormTemplate
      header={<ArtistFormHeader />}
      footer={<ArtistFormFooter />}
    >
      {children}
    </ContentFormTemplate>
  );
};
