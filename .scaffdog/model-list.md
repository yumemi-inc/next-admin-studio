---
name: 'model-list'
root: './src'
output: '/model/**/components'
ignore: []
questions:
  model: 'モデル名を入力してください (eg. artist)'
---

# `list/index.tsx`

```tsx
import { Stack } from "@mantine/core";
import { type FC, Suspense } from "react";

import { {{ inputs.model | pascal }}ListPagination } from "./pagination";
import { {{ inputs.model | pascal }}PreviewListContainer } from "./preview/container";
import { {{ inputs.model | pascal }}ListSearchForm } from "./search";
import { {{ inputs.model | pascal }}ListTab } from "./tab";
import { {{ inputs.model | pascal }}TableListContainer } from "./table/container";
import { {{ inputs.model | pascal }}TableListLoading } from "./table/loading";

export const {{ inputs.model | pascal }}List: FC = () => {
  return (
    <Stack>
      <Suspense>
        <{{ inputs.model | pascal }}ListSearchForm />

        <{{ inputs.model | pascal }}ListTab
          table={
            <Suspense fallback={<{{ inputs.model | pascal }}TableListLoading />}>
              <{{ inputs.model | pascal }}TableListContainer />
            </Suspense>
          }
          preview={
            <Suspense>
              <{{ inputs.model | pascal }}PreviewListContainer />
            </Suspense>
          }
        />

        <Suspense>
          <{{ inputs.model | pascal }}ListPagination />
        </Suspense>
      </Suspense>
    </Stack>
  );
};

```

# `list/tab.tsx`

```tsx
"use client";

import { useRouter } from "next/navigation";
import type { FC, ReactNode } from "react";

import { ListTab } from "@/model/common/components/list-tab";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import { {{ inputs.model | camel }}PathMapping } from "../../path";

type Props = {
  table: ReactNode;
  preview: ReactNode;
};

export const {{ inputs.model | pascal }}ListTab: FC<Props> = ({ table, preview }) => {
  const router = useRouter();

  const onCreateNew = () => {
    router.push({{ inputs.model | camel }}PathMapping.idToPath(NEW_ITEM_ID));
  };

  return (
    <ListTab
      renderTable={() => table}
      renderPreviewList={() => preview}
      onCreateNew={onCreateNew}
    />
  );
};

```

# `list/pagination/index.tsx`

```tsx
"use client";

import { Center } from "@mantine/core";
import type { FC } from "react";

import { Pagination } from "@/model/common/components/pagination";

import { use{{ inputs.model | pascal }}ListTotalPageCount } from "./query";

export const {{ inputs.model | pascal }}ListPagination: FC = () => {
  const total = use{{ inputs.model | pascal }}ListTotalPageCount();

  return (
    <Center>
      <Pagination total={total} />
    </Center>
  );
};

```

# `list/pagination/query.ts`

```ts
import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";
import { {{ inputs.model | snake | upper }}_MOCK_DATA } from "@/model/{{ inputs.model }}/mock";

export const use{{ inputs.model | pascal }}ListTotalPageCount = () => {
  const totalCount = {{ inputs.model | snake | upper }}_MOCK_DATA.length;

  return Math.ceil(totalCount / DEFAULT_PAGE_SIZE);
};

```

# `list/preview/container.tsx`

```tsx
"use client";

import { use{{ inputs.model | pascal }}TableItems } from "./query";
import { {{ inputs.model | pascal }}PreviewListView } from "./view";

export const {{ inputs.model | pascal }}PreviewListContainer = () => {
  const {{ inputs.model | camel }}s = use{{ inputs.model | pascal }}TableItems();
  return <{{ inputs.model | pascal }}PreviewListView {{ inputs.model | camel }}s={ {{ inputs.model | camel }}s} />;
};

```

# `list/preview/loading.tsx`

```tsx
import { Center, SimpleGrid, Skeleton, Stack } from "@mantine/core";

import { generateSequentialArray } from "@/common/lib/array";

import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";

export const {{ inputs.model | pascal }}PreviewListLoading = () => (
  <SimpleGrid
    cols={2}
    spacing={0}
    verticalSpacing={0}
    className="border-gray-4 border-t-0 border-r-0 border-b-0 border-solid"
  >
    {generateSequentialArray(DEFAULT_PAGE_SIZE).map((v) => (
      <Center
        key={v}
        py="md"
        className="border-gray-4 border-t-0 border-l-0 border-solid"
      >
        <Stack gap="sm">
          <Skeleton w={120} h={24.8} />
          <Skeleton w={375} h={667} />
        </Stack>
      </Center>
    ))}
  </SimpleGrid>
);

```

# `list/preview/query.ts`

```ts
import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";
import { usePagination } from "@/model/common/components/pagination/hook";
import { {{ inputs.model | snake | upper }}_MOCK_DATA } from "@/model/{{ inputs.model }}/mock";

import { use{{ inputs.model | pascal }}SearchParams } from "../search/params/hook";
import type { {{ inputs.model | pascal }}PreviewList } from "./type";

export const use{{ inputs.model | pascal }}TableItems = (): {{ inputs.model | pascal }}PreviewList => {
  const [page] = usePagination();
  const [params] = use{{ inputs.model | pascal }}SearchParams();

  console.info(`TODO: param=${params}とpage=${page}を用いてサーバーと通信`);
  const start = (page - 1) * DEFAULT_PAGE_SIZE;
  const end = start + DEFAULT_PAGE_SIZE;

  return {{ inputs.model | snake | upper }}_MOCK_DATA.slice(start, end);
};

```

# `list/preview/type.ts`

```tsx
import type { {{ inputs.model | pascal }} } from "@/model/{{ inputs.model }}/type";

export type {{ inputs.model | pascal }}PreviewList = Pick<
  {{ inputs.model | pascal }},
  "id" | "adminLabel"
>[];

```

# `list/preview/view.tsx`

```tsx
import { Anchor, Center, SimpleGrid, Stack } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";

import { truncateText } from "@/common/lib/truncate-text";

import { {{ inputs.model | camel }}PathMapping } from "@/model/{{ inputs.model }}/path";

import { {{ inputs.model | pascal }}PreviewTemplate } from "../../preview/template";
import type { {{ inputs.model | pascal }}PreviewList } from "./type";

type Props = {
  {{ inputs.model | camel }}s: {{ inputs.model | pascal }}PreviewList;
};

export const {{ inputs.model | pascal }}PreviewListView: FC<Props> = ({ {{ inputs.model | camel }}s }) => {
  return (
    <SimpleGrid
      cols={2}
      spacing={0}
      verticalSpacing={0}
      className="border-gray-4 border-t-0 border-r-0 border-b-0 border-solid"
    >
      { {{ inputs.model | camel }}s.map(({{ inputs.model | camel }}, index) => (
        <Center
          key={ {{ inputs.model | camel }}.id}
          pt="md"
          pb="xl"
          className="border-gray-4 border-t-0 border-l-0 border-solid"
        >
          <Stack>
            <Anchor
              component={Link}
              href={ {{ inputs.model | camel }}PathMapping.idToPath({{ inputs.model | camel }}.id)}
              fw="bold"
              underline="never"
              className="w-fit"
            >
              {index + 1}. {truncateText({{ inputs.model | camel }}.adminLabel, { length: 20 })}
            </Anchor>
            <{{ inputs.model | pascal }}PreviewTemplate />
          </Stack>
        </Center>
      ))}
    </SimpleGrid>
  );
};

```

# `list/search/inputs/free-word/slice.ts`

```ts
import type { StateCreator } from "zustand";

export type FreeWordSearchInputSlice = {
  freeWord: string;
  setFreeWord: (freeWord: string) => void;
};

export const createFreeWordSearchInputSlice =
  (initialState: {
    freeWord: string;
  }): StateCreator<FreeWordSearchInputSlice> =>
  (set) => ({
    freeWord: initialState.freeWord,
    setFreeWord: (freeWord) => set({ freeWord }),
  });

```


# `list/search/inputs/free-word/index.tsx`

```tsx
"use client";

import { TextInput } from "@/common/components/form/text-input";
import { use{{ inputs.model | pascal }}SearchStore } from "../../store/hook";

export const {{ inputs.model | pascal }}ListSearchFreeWordInput = () => {
  const freeWord = use{{ inputs.model | pascal }}SearchStore((state) => state.freeWord);
  const setFreeWord = use{{ inputs.model | pascal }}SearchStore((state) => state.setFreeWord);

  return (
    <TextInput
      label="フリーワード"
      placeholder="フリーワード"
      description="管理名称などを横断で検索します。"
      value={freeWord}
      onChange={(event) => setFreeWord(event.currentTarget.value)}
      className="max-w-lg"
    />
  );
};

```

# `list/search/inputs/status/slice.ts`

```ts
import type { StateCreator } from "zustand";

import type { StatusSearchOption } from "@/model/common/const/search-options";

export type StatusSearchInputSlice = {
  status: StatusSearchOption;
  setStatus: (status: StatusSearchOption) => void;
};

export const createStatusSearchInputSlice =
  (initialState: {
    status: StatusSearchOption;
  }): StateCreator<StatusSearchInputSlice> =>
  (set) => ({
    status: initialState.status,
    setStatus: (status) => set({ status }),
  });

```

# `list/search/inputs/status/index.tsx`

```tsx
import { RadioButtonGroup } from "@/common/components/form/radio-input";

import {
  STATUS_SEARCH_OPTIONS,
  type StatusSearchOption,
} from "@/model/common/const/search-options";

import { use{{ inputs.model | pascal }}SearchStore } from "../../store/hook";

export const {{ inputs.model | pascal }}ListStatusSearchInput = () => {
  const status = use{{ inputs.model | pascal }}SearchStore((state) => state.status);
  const setStatus = use{{ inputs.model | pascal }}SearchStore((state) => state.setStatus);

  return (
    <RadioButtonGroup
      label="ステータス"
      description="ステータスで絞り込みます。"
      options={STATUS_SEARCH_OPTIONS}
      onChange={(v) => setStatus(v as StatusSearchOption)}
      value={status}
    />
  );
};

```

# `list/search/inputs/type.ts`

```ts
import type { StatusSearchOption } from "@/model/common/const/search-options";

export type {{ inputs.model | pascal }}SearchForm = {
  freeWord: string;
  status: StatusSearchOption;
};

```

# `list/search/lib/form-to-param.ts`

```ts
import type { {{ inputs.model | pascal }}SearchForm } from "../inputs/type";
import type { {{ inputs.model | pascal }}SearchParams } from "../params";

export const {{ inputs.model | camel }}ListSearchFormToParam = (
  form: {{ inputs.model | pascal }}SearchForm,
): {{ inputs.model | pascal }}SearchParams => {
  return {
    q: form.freeWord,
    status: form.status
  };
};

```

# `list/search/lib/param-to-form.ts`

```ts
import type { {{ inputs.model | pascal }}SearchForm } from "../inputs/type";
import type { {{ inputs.model | pascal }}SearchParams } from "../params";

export const {{ inputs.model | camel }}ListSearchParamToForm = (
  params: {{ inputs.model | pascal }}SearchParams,
): {{ inputs.model | pascal }}SearchForm => {
  return {
    freeWord: params.q,
    status: params.status
  };
};

```

# `list/search/params/hook.ts`

```tsx
import { useQueryStates } from "nuqs";
import { {{ inputs.model | camel }}SearchParams } from ".";

export const use{{ inputs.model | pascal }}SearchParams = () => {
  return useQueryStates({{ inputs.model | camel }}SearchParams);
};

```

# `list/search/params/index.ts`

```tsx
import {
  type inferParserType,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs";

import {
  STATUS_SEARCH_OPTIONS,
  STATUS_SEARCH_OPTIONS_ANY,
} from "@/model/common/const/search-options";

export const {{ inputs.model | camel }}SearchParams = {
  q: parseAsString.withDefault(""),
  status: parseAsStringLiteral(
    STATUS_SEARCH_OPTIONS.map((option) => option.value),
  ).withDefault(STATUS_SEARCH_OPTIONS_ANY),
};

export type {{ inputs.model | pascal }}SearchParams = inferParserType<
  typeof {{ inputs.model | camel }}SearchParams
>;

```

# `list/search/store/hook.ts`

```ts
import { useContext } from "react";
import { useStore } from "zustand";

import type { {{ inputs.model | pascal }}SearchForm } from "../inputs/type";
import { {{ inputs.model | camel }}ListSearchParamToForm } from "../lib/param-to-form";
import { use{{ inputs.model | pascal }}SearchParams } from "../params/hook";
import { {{ inputs.model | pascal }}SearchStoreContext } from "./provider";
import type { {{ inputs.model | pascal }}SearchStore } from "./type";

export const use{{ inputs.model | pascal }}SearchStore = <T>(
  selector: (store: {{ inputs.model | pascal }}SearchStore) => T,
): T => {
  const {{ inputs.model | camel }}SearchStoreContext = useContext(
    {{ inputs.model | pascal }}SearchStoreContext,
  );

  if (!{{ inputs.model | camel }}SearchStoreContext) {
    throw new Error(
      "use{{ inputs.model | pascal }}SearchStore must be used within a {{ inputs.model | pascal }}SearchStoreProvider",
    );
  }
  return useStore({{ inputs.model | camel }}SearchStoreContext, selector);
};

export const use{{ inputs.model | pascal }}SearchStoreInitialValue =
  (): {{ inputs.model | pascal }}SearchForm => {
    const [params] = use{{ inputs.model | pascal }}SearchParams();
    return {{ inputs.model | camel }}ListSearchParamToForm(params);
  };

```

# `list/search/store/index.ts`

```tsx
import { create } from "zustand";

import type { {{ inputs.model | pascal }}SearchForm } from "../inputs/type";
import { createFreeWordSearchInputSlice } from "../inputs/free-word/slice";
import { createStatusSearchInputSlice } from "../inputs/status/slice";
import type { {{ inputs.model | pascal }}SearchStore } from "./type";

export const create{{ inputs.model | pascal }}SearchStore = (
  initialState: {{ inputs.model | pascal }}SearchForm,
) =>
  create<{{ inputs.model | pascal }}SearchStore>((set, get, store) => ({
    ...createFreeWordSearchInputSlice(initialState)(set, get, store),
    ...createStatusSearchInputSlice(initialState)(set, get, store),
    getSearchFormValue: get,
  }));

```

# `list/search/store/provider.tsx`

```tsx
"use client";

import { type FC, createContext, useRef } from "react";

import { create{{ inputs.model | pascal }}SearchStore } from "../store";
import { use{{ inputs.model | pascal }}SearchStoreInitialValue } from "./hook";

export const {{ inputs.model | pascal }}SearchStoreContext = createContext<
  ReturnType<typeof create{{ inputs.model | pascal }}SearchStore> | undefined
>(undefined);

export const {{ inputs.model | pascal }}SearchStoreProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const storeRef = useRef<ReturnType<typeof create{{ inputs.model | pascal }}SearchStore>>();
  const initialState = use{{ inputs.model | pascal }}SearchStoreInitialValue();

  if (!storeRef.current) {
    storeRef.current = create{{ inputs.model | pascal }}SearchStore(initialState);
  }

  return (
    <{{ inputs.model | pascal }}SearchStoreContext.Provider value={storeRef.current}>
      {children}
    </{{ inputs.model | pascal }}SearchStoreContext.Provider>
  );
};

```

# `list/search/store/type.ts`

```tsx
import type { FreeWordSearchInputSlice } from "../inputs/free-word/slice";
import type { StatusSearchInputSlice } from "../inputs/status/slice";
import type { {{ inputs.model | pascal }}SearchForm } from "../inputs/type";

export type {{ inputs.model | pascal }}SearchStore = {
  getSearchFormValue: () => {{ inputs.model | pascal }}SearchForm;
} & FreeWordSearchInputSlice &
  StatusSearchInputSlice;

```

# `list/search/index.tsx`

```tsx
"use client";

import type { FC, FormEvent } from "react";

import { SearchFormTemplate } from "@/model/common/components/search-form-template";

import { {{ inputs.model | pascal }}ListSearchFreeWordInput } from "./inputs/free-word";
import { {{ inputs.model | pascal }}ListStatusSearchInput } from "./inputs/status";
import { {{ inputs.model | camel }}ListSearchFormToParam } from "./lib/form-to-param";
import { use{{ inputs.model | pascal }}SearchParams } from "./params/hook";
import { use{{ inputs.model | pascal }}SearchStore } from "./store/hook";

export const {{ inputs.model | pascal }}ListSearchForm: FC = () => {
  const [, setParams] = use{{ inputs.model | pascal }}SearchParams();
  const getSearchFormValue = use{{ inputs.model | pascal }}SearchStore(
    (state) => state.getSearchFormValue,
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setParams({{ inputs.model | camel }}ListSearchFormToParam(getSearchFormValue()));
  };

  return (
    <SearchFormTemplate
      onSubmit={handleSubmit}
      basicFilter={<{{ inputs.model | pascal }}ListSearchFreeWordInput />}
      advancedFilter={
        <>
          <{{ inputs.model | pascal }}ListStatusSearchInput />
        </>
      }
    />
  );
};


```

# `list/table/container.tsx`

```tsx
"use client";

import type { FC } from "react";

import { use{{ inputs.model | pascal }}TableItems } from "./query";
import { {{ inputs.model | pascal }}TableListView } from "./view";

export const {{ inputs.model | pascal }}TableListContainer: FC = () => {
  const {{ inputs.model | camel }}s = use{{ inputs.model | pascal }}TableItems();

  return <{{ inputs.model | pascal }}TableListView {{ inputs.model | camel }}s={ {{ inputs.model | camel }}s} />;
};

```

# `list/table/head.tsx`

```tsx
import { Table } from "@mantine/core";

export const {{ inputs.model | pascal }}TableHead = () => (
  <Table.Thead>
    <Table.Tr>
      <Table.Th w={12} className="text-center">
        No.
      </Table.Th>
      <Table.Th w={400}>管理名称</Table.Th>
    </Table.Tr>
  </Table.Thead>
);

```

# `list/table/loading.tsx`

```tsx
"use client";

import { Skeleton, Table } from "@mantine/core";

import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";

import { generateSequentialArray } from "@/common/lib/array";

import { {{ inputs.model | pascal }}TableHead } from "./head";

export const {{ inputs.model | pascal }}TableListLoading = () => (
  <Table>
    <{{ inputs.model | pascal }}TableHead />

    <Table.Tbody>
      {generateSequentialArray(DEFAULT_PAGE_SIZE).map((v) => (
        <Table.Tr key={v}>
          <Table.Td py="sm" px="lg" className="text-center text-gray-6">
            <Skeleton height={15} width={12} radius="md" />
          </Table.Td>
          <Table.Td py="sm">
            <Skeleton height={15} width={400} radius="md" />
          </Table.Td>
          <Table.Td py="sm">
            <Skeleton height={15} width={112} radius="md" />
          </Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  </Table>
);

```

# `list/table/query.ts`

```tsx
import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";
import { usePagination } from "@/model/common/components/pagination/hook";
import { {{ inputs.model | snake | upper }}_MOCK_DATA } from "@/model/{{ inputs.model }}/mock";

import { use{{ inputs.model | pascal }}SearchParams } from "../search/params/hook";
import type { {{ inputs.model | pascal }}TableList } from "./type";

export const use{{ inputs.model | pascal }}TableItems = (): {{ inputs.model | pascal }}TableList => {
  const [page] = usePagination();
  const [params] = use{{ inputs.model | pascal }}SearchParams();

  console.info(`TODO: param=${params}とpage=${page}を用いてサーバーと通信`);
  const start = (page - 1) * DEFAULT_PAGE_SIZE;
  const end = start + DEFAULT_PAGE_SIZE;

  return {{ inputs.model | snake | upper }}_MOCK_DATA.slice(start, end);
};

```

# `list/table/type.ts`

```ts
import type { {{ inputs.model | pascal }} } from "../../../type";

export type {{ inputs.model | pascal }}TableList = Pick<
  {{ inputs.model | pascal }},
  "id" | "adminLabel"
>[];

```

# `list/table/view.tsx`

```tsx
import { Anchor, Table } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";

import { truncateText } from "@/common/lib/truncate-text";

import { {{ inputs.model | camel }}PathMapping } from "@/model/{{ inputs.model }}/path";

import { {{ inputs.model | pascal }}TableHead } from "./head";
import type { {{ inputs.model | pascal }}TableList } from "./type";

type Props = {
  {{ inputs.model | camel }}s: {{ inputs.model | pascal }}TableList;
};

export const {{ inputs.model | pascal }}TableListView: FC<Props> = ({ {{ inputs.model | camel }}s }) => {
  return (
    <Table>
      <{{ inputs.model | pascal }}TableHead />

      <Table.Tbody className="animate-table-fade-in">
        { {{ inputs.model | camel }}s.map(({{ inputs.model | camel }}, index) => (
          <Table.Tr key={ {{ inputs.model | camel }}.id}>
            <Table.Td className="text-center text-gray-6" width={12}>
              {index + 1}
            </Table.Td>
            <Table.Td width={400}>
              <Anchor
                component={Link}
                href={ {{ inputs.model | camel }}PathMapping.idToPath({{ inputs.model | camel }}.id)}
                fw="bold"
              >
                {truncateText({{ inputs.model | camel }}.adminLabel, { length: 32 })}
              </Anchor>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

```
