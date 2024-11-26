import {
  Input,
  Switch as PremitiveSwitch,
  Stack,
  type SwitchProps,
} from "@mantine/core";
import { type FC, useId } from "react";

import { isEmpty } from "@/common/lib/guard";

import { ErrorMessages } from "../error-messages";
import type { CostomInputProps } from "../type";

type Props = SwitchProps & CostomInputProps;

export const Switch: FC<Props> = ({
  label,
  description,
  errorMessages,
  required,
  className,
  ...switchProps
}) => {
  const hasError = errorMessages && !isEmpty(errorMessages);
  const id = useId();
  const descriptionId = `description${id}`;

  return (
    <Stack gap="xs">
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
      <PremitiveSwitch
        size="xl"
        mt="xs"
        className={`w-fit ${className}`}
        {...switchProps}
        aria-labelledby={id}
        aria-label={label ? undefined : "スイッチ"}
        aria-describedby={descriptionId}
      />
      {hasError && <ErrorMessages messages={errorMessages} />}
    </Stack>
  );
};
