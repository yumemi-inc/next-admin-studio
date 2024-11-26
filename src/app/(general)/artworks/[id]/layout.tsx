"use client";

import { type ReactNode, use } from "react";

import { useArtworkServerState } from "@/model/artwork/components/form-with-preview/hooks/server-state";
import { artworkServerToForm } from "@/model/artwork/components/form-with-preview/lib/server-to-form";
import { ArtworkFormStoreProvider } from "@/model/artwork/components/form-with-preview/store/provider";

type Props = {
  params: Promise<{
    id: string;
  }>;
  children: ReactNode;
};

export default function ArtworkDetailLayout(props: Props) {
  const { id } = use(props.params);
  const serverState = useArtworkServerState(id);
  const formValue = artworkServerToForm(serverState);

  return (
    <ArtworkFormStoreProvider initialState={formValue}>
      {props.children}
    </ArtworkFormStoreProvider>
  );
}
