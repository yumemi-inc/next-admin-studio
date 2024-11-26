import { Select as SelectPrimitive, type SelectProps } from "@mantine/core";
import type { FC } from "react";

import { isEmpty } from "@/common/lib/guard";

import { ErrorMessages } from "../error-messages";
import { getInputStyles } from "../styles";
import type { CostomInputProps } from "../type";

type Props = SelectProps & CostomInputProps;

export const Select: FC<Props> = ({
  label,
  description,
  placeholder = "クリックして選択",
  errorMessages,
  clearable = true,
  required = false,
  searchable = true,
  ...inputProps
}) => (
  <SelectPrimitive
    clearable={clearable}
    label={label}
    aria-label={label ? undefined : "選択入力"}
    description={description}
    required={required}
    searchable={searchable}
    aria-required={required}
    placeholder={placeholder}
    error={
      errorMessages && !isEmpty(errorMessages) ? (
        <ErrorMessages messages={errorMessages} />
      ) : null
    }
    styles={getInputStyles(!!description)}
    {...inputProps}
  />
);
