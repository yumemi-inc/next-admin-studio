import { type ChangeEventHandler, useCallback } from "react";

import { useArtistFormStore } from "../../../store/hook";

export const useArtistAuthorizedInput = () => {
  const value = useArtistFormStore((state) => state.authorized);
  const _setValue = useArtistFormStore((state) => state.setAuthorized);

  const setValue: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      _setValue(event.target.checked);
    },
    [_setValue],
  );

  return { value, setValue };
};
