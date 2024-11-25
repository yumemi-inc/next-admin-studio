import { Input, type InputErrorProps, Text } from "@mantine/core";
import type { FC } from "react";

type Props = {
  messages: string[];
} & InputErrorProps;

export const ErrorMessages: FC<Props> = ({ messages, ...inputErrorProps }) => {
  return (
    <Input.Error component="span" size="lg" {...inputErrorProps}>
      {messages.map((message) => (
        <Text key={message} component="span">
          {message}
          {messages.length > 1 && <br />}
        </Text>
      ))}
    </Input.Error>
  );
};
