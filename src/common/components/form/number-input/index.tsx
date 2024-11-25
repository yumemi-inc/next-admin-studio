import {
  NumberInput as NumberInputPrimitive,
  type NumberInputProps,
} from "@mantine/core";
import type { FC } from "react";

import { isEmpty } from "@/common/lib/guard";

import { ErrorMessages } from "../error-messages";
import { getInputStyles } from "../styles";
import type { CostomInputProps } from "../type";

type Props = NumberInputProps & CostomInputProps;

export const NumberInput: FC<Props> = ({
  label,
  description,
  errorMessages,
  clampBehavior = "strict",
  allowDecimal = false,
  required = false,
  ...inputProps
}) => (
  <NumberInputPrimitive
    clampBehavior={clampBehavior}
    allowDecimal={allowDecimal}
    label={label}
    aria-label={label ? undefined : "数値入力"}
    description={description}
    required={required}
    error={
      errorMessages && !isEmpty(errorMessages) ? (
        <ErrorMessages messages={errorMessages} />
      ) : null
    }
    styles={getInputStyles(!!description)}
    {...inputProps}
  />
);
