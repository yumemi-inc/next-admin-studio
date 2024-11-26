"use client";

import { TextInput } from "@/common/components/form/text-input";
import { useArtistSearchStore } from "../../store/hook";

export const ArtistListSearchFreeWordInput = () => {
  const freeWord = useArtistSearchStore((state) => state.freeWord);
  const setFreeWord = useArtistSearchStore((state) => state.setFreeWord);

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
