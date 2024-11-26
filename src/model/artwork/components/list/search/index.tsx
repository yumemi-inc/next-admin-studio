"use client";

import type { FC, FormEvent } from "react";

import { SearchFormTemplate } from "@/model/common/components/search-form-template";

import { ArtworkListSearchFreeWordInput } from "./inputs/free-word";
import { ArtworkListStatusSearchInput } from "./inputs/status";
import { artworkListSearchFormToParam } from "./lib/form-to-param";
import { useArtworkSearchParams } from "./params/hook";
import { useArtworkSearchStore } from "./store/hook";

export const ArtworkListSearchForm: FC = () => {
  const [, setParams] = useArtworkSearchParams();
  const getSearchFormValue = useArtworkSearchStore(
    (state) => state.getSearchFormValue,
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setParams(artworkListSearchFormToParam(getSearchFormValue()));
  };

  return (
    <SearchFormTemplate
      onSubmit={handleSubmit}
      basicFilter={<ArtworkListSearchFreeWordInput />}
      advancedFilter={
        <>
          <ArtworkListStatusSearchInput />
        </>
      }
    />
  );
};
