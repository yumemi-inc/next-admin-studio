import { DateTimePicker, type DateTimePickerProps } from "@mantine/dates";
import type { FC } from "react";

import { isEmpty } from "@/common/lib/guard";

import { ErrorMessages } from "../error-messages";
import { getInputStyles } from "../styles";
import type { CostomInputProps } from "../type";

type Props = DateTimePickerProps & CostomInputProps;

export const DateTimeInput: FC<Props> = ({
  label,
  description,
  errorMessages,
  required,
  valueFormat = "YYYY/MM/DD HH:mm",
  placeholder = "クリックして選択",
  ...inputProps
}) => (
  <DateTimePicker
    label={label}
    aria-label={label ? undefined : "日時入力"}
    description={description}
    required={required}
    aria-required={required}
    error={
      errorMessages && !isEmpty(errorMessages) ? (
        <ErrorMessages messages={errorMessages} />
      ) : null
    }
    styles={getInputStyles(!!description)}
    valueFormat={valueFormat}
    placeholder={placeholder}
    firstDayOfWeek={0} // カレンダーは日曜日始まり
    highlightToday
    {...inputProps}
  />
);
