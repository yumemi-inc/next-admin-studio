import { Input, Stack } from "@mantine/core";
import { type FC, useId } from "react";
import {
  DateField as DateFieldPrimitive,
  DateInput,
  DateSegment,
} from "react-aria-components";

import type { CostomInputProps } from "../type";
import { dateValueToDate } from "./utils/date-value-to-date";

type Props = {
  onChange?: (date: Date | null) => void;
  required?: boolean;
} & CostomInputProps;

export const DateField: FC<Props> = ({
  label,
  description,
  required,
  onChange,
}) => {
  const labelId = useId();
  return (
    <Stack gap="xs">
      {label && (
        <Input.Label size="lg" fw="bold" required={required} id={labelId}>
          {label}
        </Input.Label>
      )}
      {description && (
        <Input.Description size="lg" c="dark">
          {description}
        </Input.Description>
      )}
      <DateFieldPrimitive
        onChange={(value) => {
          onChange?.(dateValueToDate(value));
        }}
        aria-label={label ? undefined : "日付入力"}
        aria-labelledby={label ? labelId : undefined}
      >
        <DateInput className="flex w-40 gap-1 rounded-md border border-gray-4 border-solid px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50 data-[focus-within]:border-primary-6">
          {(segment) => (
            <DateSegment
              className="-mt-0.1 focus-visible:outline-none data-[placeholder]:text-gray-6"
              segment={segment}
            />
          )}
        </DateInput>
      </DateFieldPrimitive>
    </Stack>
  );
};
