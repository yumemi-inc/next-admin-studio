import { createArtistAuthorizedSlice } from "../form/inputs/authorized/slice";

import { createArtistTagsSlice } from "../form/inputs/tags/slice";

import { createArtistNameSlice } from "../form/inputs/name/slice";

import { create } from "zustand";

import { createOperationSlice } from "@/model/common/feature/operation/slice";
import { createValidationSlice } from "@/model/common/store/form";

import { createAdminLabelSlice } from "../form/inputs/admin-label/slice";
import type { ArtistForm } from "../form/type";
import type { ArtistFormStore } from "./type";

export const createArtistFormStore = (initialState: ArtistForm) =>
  create<ArtistFormStore>()((set, get, store) => {
    return {
      ...createOperationSlice(set, get, store),
      ...createValidationSlice(set, get, store),
      ...createAdminLabelSlice(initialState)(set, get, store),
      ...createArtistNameSlice(initialState)(set, get, store),
      ...createArtistTagsSlice(initialState)(set, get, store),
      ...createArtistAuthorizedSlice(initialState)(set, get, store),
      getFormValue: get,
      setFormValue: (artistForm) => set(artistForm),
      getFormIsValid: () => {
        return (
          get().getAdminLabelIsValid() &&
          get().getNameIsValid() &&
          get().getTagsIsValid()
        );
      },
    };
  });
