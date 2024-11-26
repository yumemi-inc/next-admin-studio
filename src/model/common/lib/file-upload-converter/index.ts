import { isEmpty } from "remeda";

export const fileUploadConverter = {
  toClient: (url: string) => ({
    url: url,
    file: isEmpty(url) ? null : new File([], "アップロードされた画像"),
  }),
};
