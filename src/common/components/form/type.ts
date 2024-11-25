import type { ReactNode } from "react";

export type CostomInputProps = {
  label?: ReactNode | undefined;
  description?: ReactNode | undefined;
  errorMessages?: string[] | undefined;
  dataTestId?: string;
};
