import { RadioButtonGroup } from "@/common/components/form/radio-input";

import {
  STATUS_SEARCH_OPTIONS,
  type StatusSearchOption,
} from "@/model/common/const/search-options";

import { useArtworkSearchStore } from "../../store/hook";

export const ArtworkListStatusSearchInput = () => {
  const status = useArtworkSearchStore((state) => state.status);
  const setStatus = useArtworkSearchStore((state) => state.setStatus);

  return (
    <RadioButtonGroup
      label="ステータス"
      description="ステータスで絞り込みます。"
      options={STATUS_SEARCH_OPTIONS}
      onChange={(v) => setStatus(v as StatusSearchOption)}
      value={status}
    />
  );
};
