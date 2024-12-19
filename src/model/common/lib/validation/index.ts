import type { Validation } from "@/common/lib/form-validation/type";
import { match } from "ts-pattern";

export type ValidationPhase =
  | "onChange"
  | "onDraftSubmit"
  | "onConfirmedSubmit";

export type InputValidation = {
  onChange?: Validation<unknown>[];
  onDraftSubmit?: Validation<unknown>[];
  onConfirmedSubmit?: Validation<unknown>[];
};

type Props = {
  phase: ValidationPhase;
  validations: InputValidation;
};

export const getErrorMessagesFromValidations = (
  validations: Validation<unknown>[],
): string[] => {
  const messages: string[] = [];

  for (const v of validations) {
    if (!v.isOk) {
      messages.push(v.errorMessage);
    }
  }

  return messages;
};

export const getValidationErrorMessage = ({
  phase,
  validations = {
    onChange: [],
    onDraftSubmit: [],
    onConfirmedSubmit: [],
  },
}: Props) => {
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
