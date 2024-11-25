import { Avatar, Menu, UnstyledButton, rem } from "@mantine/core";
import { IconLogout, IconSettings, IconUser } from "@tabler/icons-react";
import type { FC } from "react";

import type { Administrator } from "../../type";

type Props = {
  administrator: Administrator;
  logout: () => void;
  onSettingClick: () => void;
};

export const AdministratorAvaterView: FC<Props> = ({
  administrator,
  logout,
  onSettingClick,
}) => {
  return (
    <Menu>
      <Menu.Target>
        <UnstyledButton>
          <Avatar color="cyan">
            <IconUser size="1.5rem" />
          </Avatar>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>
          <div>{administrator.email}</div>
          <div>{administrator.name}</div>
        </Menu.Label>
        <Menu.Divider />

        <Menu.Item
          onClick={onSettingClick}
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          設定
        </Menu.Item>
        <Menu.Item
          onClick={logout}
          color="red"
          leftSection={
            <IconLogout style={{ width: rem(14), height: rem(14) }} />
          }
        >
          ログアウト
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
