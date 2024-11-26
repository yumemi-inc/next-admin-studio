"use client";
import { Textarea as TextAreaPremitive } from "@mantine/core";
import { type ComponentProps, type FC, useCallback } from "react";

import { isEmpty } from "@/common/lib/guard";

import { ErrorMessages } from "../error-messages";
import { getInputStyles } from "../styles";
import type { CostomInputProps } from "../type";

type Props = ComponentProps<typeof TextAreaPremitive> &
  CostomInputProps & {
    setValue?: (v: string) => void;
  };

export const TextArea: FC<Props> = ({
  label,
  description,
  errorMessages,
  setValue,
  required = false,
  ref,
  ...inputProps
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue?.(e.currentTarget.value);
    },
    [setValue],
  );

  return (
    <TextAreaPremitive
      label={label}
      aria-label={label ? undefined : "テキストエリア"}
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
      autosize
      {...inputProps}
    />
  );
};
