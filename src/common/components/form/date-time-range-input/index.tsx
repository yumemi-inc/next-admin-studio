import { Flex, Input, Stack, Text } from "@mantine/core";
import { DateTimePicker, type DateTimePickerProps } from "@mantine/dates";
import { type FC, useId } from "react";

import { isDefined, isEmpty } from "@/common/lib/guard";

import { ErrorMessages } from "../error-messages";
import type { CostomInputProps } from "../type";
import type { NullableDateRange } from "./type";

type Props = Omit<DateTimePickerProps, "value" | "onChange"> &
  CostomInputProps & {
    startProps?: {
      placeholder?: string;
      name?: string;
    };
    endProps?: {
      placeholder?: string;
      name?: string;
    };
    onChange?: (value: NullableDateRange) => void;
    value?: NullableDateRange;
  };

export const DateTimeRangeInput: FC<Props> = ({
  label,
  description,
  errorMessages,
  required = false,
  valueFormat = "YYYY/MM/DD HH:mm",
  startProps = { placeholder: "開始日時", name: "start" },
  endProps = { placeholder: "終了日時", name: "end" },
  value,
  onChange,
  dataTestId,
  ...inputProps
}) => {
  const id = useId();
  const descriptionId = `description${id}`;
  const hasError = errorMessages && !isEmpty(errorMessages);

  // controlledの場合のprops
  const startInputProps = isDefined(value) && {
    value: value[0],
    onChange: (start: Date | null) => onChange?.([start, value[1]]),
  };
  const endInputProps = isDefined(value) && {
    value: value[1],
    onChange: (end: Date | null) => onChange?.([value[0], end]),
  };

  return (
    // WANT_TO_FIX: Mantine UIの既存のlabelプロパティに渡すのとは若干スペーシングが異なる
    <Stack gap="xs" data-testid={dataTestId}>
      {label && (
        <Input.Label size="lg" fw="bold" required={required} id={id}>
          {label}
        </Input.Label>
      )}
      {description && (
        <Input.Description size="lg" c="dark" id={descriptionId}>
          {description}
        </Input.Description>
      )}

      <Flex gap="lg" align="center">
        <DateTimePicker
          {...inputProps}
          {...startProps}
          valueFormat={valueFormat}
          error={hasError}
          firstDayOfWeek={0} // カレンダーは日曜日始まり
          highlightToday
          aria-labelledby={id}
          aria-label={label ? undefined : "下限日時入力"}
          aria-describedby={descriptionId}
          {...startInputProps}
          w={160}
        />
        <Text>→</Text>
        <DateTimePicker
          {...inputProps}
          {...endProps}
          valueFormat={valueFormat}
          error={hasError}
          firstDayOfWeek={0} // カレンダーは日曜日始まり
          highlightToday
          aria-labelledby={id}
          aria-label={label ? undefined : "下限日時入力"}
          aria-describedby={descriptionId}
          {...endInputProps}
          w={160}
        />
      </Flex>

      {hasError && <ErrorMessages messages={errorMessages} />}
    </Stack>
  );
};
