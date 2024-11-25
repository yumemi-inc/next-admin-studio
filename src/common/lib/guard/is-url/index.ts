import { url, is, pipe, string } from "valibot";

export const isUrl = (v: string) => {
  const isValidProtocol = v.startsWith("http://") || v.startsWith("https://");
  if (!isValidProtocol) return false;

  return is(pipe(string(), url()), v);
};
