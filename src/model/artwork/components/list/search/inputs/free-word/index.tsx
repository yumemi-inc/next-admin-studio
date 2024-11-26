"use client";

import { TextInput } from "@/common/components/form/text-input";
import { useArtworkSearchStore } from "../../store/hook";

export const ArtworkListSearchFreeWordInput = () => {
  const freeWord = useArtworkSearchStore((state) => state.freeWord);
  const setFreeWord = useArtworkSearchStore((state) => state.setFreeWord);

  return (
    <TextInput
      label="フリーワード"
      placeholder="フリーワード"
      description="管理名称などを横断で検索します。"
      value={freeWord}
      onChange={(event) => setFreeWord(event.currentTarget.value)}
      className="max-w-lg"
    />
  );
};
