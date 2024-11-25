import { match } from "ts-pattern";

import type { Validation } from "@/common/lib/form-validation/type";

export type ValidationPhase =
  | "onChange"
  | "onDraftSubmit"
  | "onConfirmedSubmit";

type Props<T> = {
  phase: ValidationPhase;
  validations: {
    onChange?: Validation<T>[];
    onDraftSubmit?: Validation<T>[];
    onConfirmedSubmit?: Validation<T>[];
  };
};

export const getErrorMessagesFromValidations = (
  validations: Validation<unknown>[],
): string[] => {
  const messages: string[] = [];

  // MEMO: filter(...).map(...)よりも計算が少ない
  for (const v of validations) {
    if (!v.isOk) {
      messages.push(v.errorMessage);
    }
  }

  return messages;
};

export const getValidationtErrorMessage = <T>({
  phase,
  validations = {
    onChange: [],
    onDraftSubmit: [],
    onConfirmedSubmit: [],
  },
}: Props<T>) => {
  const validationsOnPhase = match(phase)
    .with("onChange", () => validations.onChange ?? [])
    .with("onDraftSubmit", () => [
      ...(validations.onChange ?? []),
      ...(validations.onDraftSubmit ?? []),
    ])
    .with("onConfirmedSubmit", () => [
      ...(validations.onChange ?? []),
      ...(validations.onDraftSubmit ?? []),
      ...(validations.onConfirmedSubmit ?? []),
    ])
    .exhaustive();

  return getErrorMessagesFromValidations(validationsOnPhase);
};
