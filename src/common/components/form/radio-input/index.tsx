import { Flex, Input, Radio, Stack } from "@mantine/core";
import { type FC, useId } from "react";

import { isEmpty } from "@/common/lib/guard";

import { ErrorMessages } from "../error-messages";
import type { CostomInputProps } from "../type";

type Props = CostomInputProps & {
  options: ReadonlyArray<{ value: string; label: string }>;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  isVertical?: boolean;
};

export const RadioButtonGroup: FC<Props> = ({
  options,
  value,
  label,
  description,
  required = false,
  disabled = false,
  errorMessages,
  onChange,
  isVertical = false,
  dataTestId,
}: Props) => {
  const labelId = useId();
  const hasError = errorMessages && !isEmpty(errorMessages);
  return (
    <Stack gap="xs" data-testid={dataTestId}>
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
      <Radio.Group
        onChange={onChange}
        value={value}
        size="lg"
        aria-labelledby={label ? labelId : undefined}
        aria-label={label ? undefined : "ラジオボタングループ"}
      >
        <Flex direction={isVertical ? "column" : "row"} gap="md" wrap="wrap">
          {options.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              label={option.label}
              disabled={disabled}
              styles={{
                body: {
                  alignItems: "center",
                },
              }}
            />
          ))}
        </Flex>
      </Radio.Group>
      {hasError && <ErrorMessages messages={errorMessages} />}
    </Stack>
  );
};
