import { useCallback } from "react";

import { uploadFile } from "@/common/lib/upload-file";

import { useArtworkFormStore } from "../../../store/hook";
import { ARTWORK_IMAGE_DEFAULT_VALUE } from "./const";

export const useArtworkImageInput = () => {
  const image = useArtworkFormStore((state) => state.image);
  const setImage = useArtworkFormStore((state) => state.setImage);
  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtworkFormStore(
    (state) => state.getImageErrorMessages,
  );

  const errorMessages = getErrorMessages(image.url, validationPhase);

  const onUpload = useCallback(
    async (file: File | null) => {
      if (!file) {
        // 初期化処理
        setImage(ARTWORK_IMAGE_DEFAULT_VALUE);
        return;
      }

      const uploadedUrl = await uploadFile(file);

      setImage({ file, url: uploadedUrl });
    },
    [setImage],
  );

  return { file: image.file, onUpload, errorMessages };
};
