import { rem } from "@mantine/core";
import { type NotificationData, notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";

type ToastId = string;

export const toast = (props: NotificationData): ToastId => {
  return notifications.show({
    ...props,
  });
};

export const errorToast = (props: NotificationData): ToastId => {
  return notifications.show({
    ...props,
    color: "red",
    autoClose: 2500,
  });
};

export const loadingToast = ({ message }: NotificationData) => {
  const id = notifications.show({
    title: "更新中...🚴🏻‍♂️",
    message,
    loading: true,
  });

  const settle = ({ message }: NotificationData) => {
    notifications.update({
      id,
      title: "完了しました！😆",
      message,
      icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
      autoClose: 3000,
      loading: false,
    });
  };

  const error = ({ message }: NotificationData) => {
    notifications.update({
      id,
      title: "エラーが発生しました😥",
      message,
      loading: false,
      color: "red",
    });
  };

  return { settle, error };
};
