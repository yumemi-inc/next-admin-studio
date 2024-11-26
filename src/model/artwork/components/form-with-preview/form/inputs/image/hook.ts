import { useCallback } from "react";
import { useArtworkFormStore } from "../../../store/hook";
import {
  ARTWORK_IMAGE_FILE_DEFAULT_VALUE,
  ARTWORK_IMAGE_URL_DEFAULT_VALUE,
} from "./const";

export const useArtworkImageInput = () => {
  const file = useArtworkFormStore((state) => state.imageFile);
  const setFile = useArtworkFormStore((state) => state.setImageFile);
  const url = useArtworkFormStore((state) => state.imageUrl);
  const setUrl = useArtworkFormStore((state) => state.setImageUrl);

  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtworkFormStore(
    (state) => state.getImageErrorMessages,
  );

  const errorMessages = getErrorMessages(url, validationPhase);

  const onUpload = useCallback(
    async (file: File | null) => {
      if (!file) {
        // 初期化処理
        setUrl(ARTWORK_IMAGE_URL_DEFAULT_VALUE);
        setFile(ARTWORK_IMAGE_FILE_DEFAULT_VALUE);
        return;
      }

      // ファイルのアップロード処理
      const uploadedUrl = "uploaded url";

      setUrl(uploadedUrl);
      setFile(file);
    },
    [setFile, setUrl],
  );

  return { file, onUpload, errorMessages };
};
