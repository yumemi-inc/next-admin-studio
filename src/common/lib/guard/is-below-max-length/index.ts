import { is, maxLength, pipe, string } from "valibot";

export const isBelowMaxLength = (max: number) => (v: string) =>
  is(pipe(string(), maxLength(max)), v);
