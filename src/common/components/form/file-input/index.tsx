import {
  FileInput as FileInputPrimitive,
  type FileInputProps,
  Loader,
} from "@mantine/core";
import { type FC, useCallback, useState } from "react";
import { flushSync } from "react-dom";

import { isEmpty } from "@/common/lib/guard";

import { ErrorMessages } from "../error-messages";
import { getInputStyles } from "../styles";
import type { CostomInputProps } from "../type";

type Props = FileInputProps & CostomInputProps;

export const FileInput: FC<Props> = ({
  label,
  description,
  errorMessages,
  required = false,
  ...inputProps
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback(
    async (file: File | null) => {
      flushSync(() => {
        setIsLoading(true);
      });
      await Promise.resolve(inputProps.onChange?.(file));
      setIsLoading(false);
    },
    [inputProps.onChange],
  );

  return (
    <FileInputPrimitive
      label={label}
      aria-label={label ? undefined : "ファイル選択"}
      description={description}
      required={required}
      error={
        errorMessages && !isEmpty(errorMessages) ? (
          <ErrorMessages messages={errorMessages} />
        ) : null
      }
      clearable
      styles={getInputStyles(!!description)}
      {...inputProps}
      onChange={handleChange}
      leftSection={isLoading ? <Loader size={16} /> : inputProps.leftSection}
    />
  );
};
