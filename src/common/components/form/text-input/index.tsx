"use client";

import { TextInput as TextInputPrimitive } from "@mantine/core";
import { type ComponentProps, type FC, useCallback } from "react";

import { isEmpty } from "@/common/lib/guard";

import { ErrorMessages } from "../error-messages";
import { getInputStyles } from "../styles";
import type { CostomInputProps } from "../type";

type Props = ComponentProps<"input"> &
  CostomInputProps & {
    setValue?: (v: string) => void;
  };

export const TextInput: FC<Props> = ({
  label,
  description,
  errorMessages,
  setValue,
  size,
  required = false,
  ref,
  ...inputProps
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue?.(e.currentTarget.value);
    },
    [setValue],
  );

  return (
    <TextInputPrimitive
      label={label}
      aria-label={label ? undefined : "テキスト入力"}
      description={description}
      required={required}
      aria-required={required}
      onChange={handleChange}
      error={
        errorMessages && !isEmpty(errorMessages) ? (
          <ErrorMessages messages={errorMessages} />
        ) : null
      }
      styles={getInputStyles(!!description)}
      {...inputProps}
    />
  );
};
