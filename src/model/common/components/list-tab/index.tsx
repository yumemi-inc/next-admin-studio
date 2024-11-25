"use client";

import { Button, Tabs, rem } from "@mantine/core";
import { IconBorderAll, IconPhoto, IconPlus } from "@tabler/icons-react";

import type { FC, ReactNode } from "react";
import { LIST_VIEW_TABS, type TabType, useListTabParams } from "./hook";

const STYLE = {
  ICON: { width: rem(18), height: rem(18) },
};

type Props = {
  renderTable: () => ReactNode;
  renderPreviewList: () => ReactNode;
  onCreateNew: () => void;
};

export const ListTab: FC<Props> = ({
  renderTable,
  renderPreviewList,
  onCreateNew,
}) => {
  const [activeTab, setActiveTab] = useListTabParams();

  return (
    <Tabs
      value={activeTab}
      onChange={(value) => {
        setActiveTab(value as TabType);
      }}
    >
      <Tabs.List className="flex">
        <Tabs.Tab
          value={LIST_VIEW_TABS.TABLE}
          leftSection={<IconBorderAll style={STYLE.ICON} />}
        >
          テーブル
        </Tabs.Tab>
        <Tabs.Tab
          value={LIST_VIEW_TABS.PREVIEW}
          leftSection={<IconPhoto style={STYLE.ICON} />}
        >
          プレビュー
        </Tabs.Tab>
        <Button
          leftSection={<IconPlus size={14} />}
          onClick={onCreateNew}
          className="ms-auto"
          mb="md"
          variant="outline"
        >
          新規作成
        </Button>
      </Tabs.List>

      <Tabs.Panel value="table">{renderTable()}</Tabs.Panel>

      <Tabs.Panel value="preview">{renderPreviewList()}</Tabs.Panel>
    </Tabs>
  );
};
