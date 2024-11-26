"use client";

import { type ReactNode, use } from "react";

import { useArtistServerState } from "@/model/artist/components/form-with-preview/hooks/server-state";
import { artistServerToForm } from "@/model/artist/components/form-with-preview/lib/server-to-form";
import { ArtistFormStoreProvider } from "@/model/artist/components/form-with-preview/store/provider";

type Props = {
  params: Promise<{
    id: string;
  }>;
  children: ReactNode;
};

export default function ArtistDetailLayout(props: Props) {
  const { id } = use(props.params);
  const serverState = useArtistServerState(id);
  const formValue = artistServerToForm(serverState);

  return (
    <ArtistFormStoreProvider initialState={formValue}>
      {props.children}
    </ArtistFormStoreProvider>
  );
}
