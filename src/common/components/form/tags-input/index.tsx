import {
  TagsInput as TagsInputPrimitive,
  type TagsInputProps,
} from "@mantine/core";
import type { FC } from "react";

import { isEmpty } from "@/common/lib/guard";

import { ErrorMessages } from "../error-messages";
import { getInputStyles } from "../styles";
import type { CostomInputProps } from "../type";

type Props = TagsInputProps & CostomInputProps;

export const TagsInput: FC<Props> = ({
  label,
  description,
  errorMessages,
  placeholder = "文字入力→Enterで確定",
  required = false,
  ...inputProps
}) => (
  <TagsInputPrimitive
    placeholder={placeholder}
    label={label}
    aria-label={label ? undefined : "タグ入力"}
    description={description}
    required={required}
    aria-required={required}
    error={
      errorMessages && !isEmpty(errorMessages) ? (
        <ErrorMessages messages={errorMessages} />
      ) : null
    }
    styles={getInputStyles(!!description)}
    {...inputProps}
  />
);
