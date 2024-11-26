"use client";

import type { FC, FormEvent } from "react";

import { SearchFormTemplate } from "@/model/common/components/search-form-template";

import { ArtistListSearchFreeWordInput } from "./inputs/free-word";
import { ArtistListStatusSearchInput } from "./inputs/status";
import { artistListSearchFormToParam } from "./lib/form-to-param";
import { useArtistSearchParams } from "./params/hook";
import { useArtistSearchStore } from "./store/hook";

export const ArtistListSearchForm: FC = () => {
  const [, setParams] = useArtistSearchParams();
  const getSearchFormValue = useArtistSearchStore(
    (state) => state.getSearchFormValue,
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setParams(artistListSearchFormToParam(getSearchFormValue()));
  };

  return (
    <SearchFormTemplate
      onSubmit={handleSubmit}
      basicFilter={<ArtistListSearchFreeWordInput />}
      advancedFilter={
        <>
          <ArtistListStatusSearchInput />
        </>
      }
    />
  );
};
