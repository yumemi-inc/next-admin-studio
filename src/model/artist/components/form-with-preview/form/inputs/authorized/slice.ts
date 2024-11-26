import type { FormInputSliceCreater } from "@/model/common/store/form";

export type ArtistAuthorizedSlice = {
  authorized: boolean;
  setAuthorized: (authorized: boolean) => void;
};

export const createArtistAuthorizedSlice: FormInputSliceCreater<
  ArtistAuthorizedSlice,
  { authorized: boolean }
> = (initalValue) => (set) => ({
  authorized: initalValue.authorized,
  setAuthorized: (authorized) => set({ authorized }),
});
