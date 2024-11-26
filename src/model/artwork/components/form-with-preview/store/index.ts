import { createArtworkConditionSlice } from "../form/inputs/condition/slice";

import { createArtworkSalesStyleSlice } from "../form/inputs/sales-style/slice";

import { createArtworkSalesPeriodSlice } from "../form/inputs/sales-period/slice";

import { createArtworkOpenAtSlice } from "../form/inputs/open-at/slice";

import { createArtworkImageSlice } from "../form/inputs/image/slice";

import { createArtworkArtistSlice } from "../form/inputs/artist/slice";

import { createArtworkDescriptionSlice } from "../form/inputs/description/slice";

import { createArtworkTitleSlice } from "../form/inputs/title/slice";

import { create } from "zustand";

import { createOperationSlice } from "@/model/common/feature/operation/slice";
import { createValidationSlice } from "@/model/common/store/form";

import { createAdminLabelSlice } from "../form/inputs/admin-label/slice";
import type { ArtworkForm } from "../form/type";
import type { ArtworkFormStore } from "./type";

export const createArtworkFormStore = (initialState: ArtworkForm) =>
  create<ArtworkFormStore>()((set, get, store) => {
    return {
      ...createOperationSlice(set, get, store),
      ...createValidationSlice(set, get, store),
      ...createAdminLabelSlice(initialState)(set, get, store),
      ...createArtworkTitleSlice(initialState)(set, get, store),
      ...createArtworkDescriptionSlice(initialState)(set, get, store),
      ...createArtworkArtistSlice(initialState)(set, get, store),
      ...createArtworkImageSlice(initialState)(set, get, store),
      ...createArtworkOpenAtSlice(initialState)(set, get, store),
      ...createArtworkSalesPeriodSlice(initialState)(set, get, store),
      ...createArtworkSalesStyleSlice(initialState)(set, get, store),
      ...createArtworkConditionSlice(initialState)(set, get, store),
      getFormValue: get,
      setFormValue: (artworkForm) => set(artworkForm),
      getFormIsValid: () => {
        return (
          get().getAdminLabelIsValid() &&
          get().getTitleIsValid() &&
          get().getDescriptionIsValid() &&
          get().getArtistIsValid() &&
          get().getImageIsValid() &&
          get().getOpenAtIsValid() &&
          get().getSalesPeriodIsValid() &&
          get().getSalesStyleIsValid() &&
          get().getConditionIsValid()
        );
      },
    };
  });

// TODO: getFormIsValid に get().getTitleIsValid() を追加

// TODO: getFormIsValid に get().getDescriptionIsValid() を追加

// TODO: getFormIsValid に get().getArtistIsValid() を追加

// TODO: getFormIsValid に get().getImageIsValid() を追加

// TODO: getFormIsValid に get().getOpenAtIsValid() を追加

// TODO: getFormIsValid に get().getSalesPeriodIsValid() を追加

// TODO: getFormIsValid に get().getSalesStyleIsValid() を追加

// TODO: getFormIsValid に get().getConditionIsValid() を追加
