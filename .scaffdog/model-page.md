---
name: 'model-page'
root: './src/'
output: '/app/'
ignore: []
questions:
  model: 'モデル名を入力してください (eg. artist)'
  path: 'パスを入力してください (eg. artists)'
  label: 'モデルの日本語表記を入力してください（eg. アーティスト）'
---

# `(general)/{{ inputs.path }}/page.tsx`

```tsx
import { Stack, Title } from "@mantine/core";

import { {{ inputs.model | pascal }}List } from "@/model/{{ inputs.model }}/components/list";

export default function {{ inputs.model | pascal }}ListPage() {
  return (
    <main>
      <Stack p="xl" gap="lg">
        <Title>{{ inputs.label }}一覧</Title>
        <{{ inputs.model | pascal }}List />
      </Stack>
    </main>
  );
}

```

# `(general)/{{ inputs.path }}/layout.tsx`

```tsx
import { {{ inputs.model | pascal }}SearchStoreProvider } from "@/model/{{ inputs.model }}/components/list/search/store/provider";
import { type PropsWithChildren, Suspense } from "react";

export default function {{ inputs.model | pascal }}ListLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <Suspense>
      <{{ inputs.model | pascal }}SearchStoreProvider>
        {children}
      </{{ inputs.model | pascal }}SearchStoreProvider>
    </Suspense>
  );
}

```

# `(general)/{{ inputs.path }}/[id]/layout.tsx`

```tsx
"use client";

import { type ReactNode, use } from "react";

import { use{{ inputs.model | pascal }}ServerState } from "@/model/{{ inputs.model }}/components/form-with-preview/hooks/server-state";
import { {{ inputs.model | camel }}ServerToForm } from "@/model/{{ inputs.model }}/components/form-with-preview/lib/server-to-form";
import { {{ inputs.model | pascal }}FormStoreProvider } from "@/model/{{ inputs.model }}/components/form-with-preview/store/provider";

type Props = {
  params: Promise<{
    id: string;
  }>;
  children: ReactNode;
};

export default function {{ inputs.model | pascal }}DetailLayout(props: Props) {
  const { id } = use(props.params);
  const serverState = use{{ inputs.model | pascal }}ServerState(id);
  const formValue = {{ inputs.model | camel }}ServerToForm(serverState);

  return (
    <{{ inputs.model | pascal }}FormStoreProvider initialState={formValue}>
      {props.children}
    </{{ inputs.model | pascal }}FormStoreProvider>
  );
}

```

# `(general)/{{ inputs.path }}/[id]/page.tsx`

```tsx
import { {{ inputs.model | pascal }}FormWithPreview } from "@/model/{{ inputs.model }}/components/form-with-preview";

export default function {{ inputs.model | pascal }}DetailPage() {
  return (
    <main>
      <{{ inputs.model | pascal }}FormWithPreview />
    </main>
  )
}

```

# `(general)/{{ inputs.path }}/new/page.tsx`

```tsx
import type { SearchParams } from "nuqs";

import { copyAndNewParamsCache } from "@/model/common/feature/operation/copy-and-new/params";
import { {{ inputs.model | pascal }}FormWithPreview } from "@/model/{{ inputs.model }}/components/form-with-preview";
import { {{ inputs.model | camel }}ServerToForm } from "@/model/{{ inputs.model }}/components/form-with-preview/lib/server-to-form";
import { get{{ inputs.model | pascal }} } from "@/model/{{ inputs.model }}/components/form-with-preview/query";
import { {{ inputs.model | snake | upper }}_FORM_STORE_INITIAL_STATE } from "@/model/{{ inputs.model }}/components/form-with-preview/store/const";
import { {{ inputs.model | pascal }}FormStoreProvider } from "@/model/{{ inputs.model }}/components/form-with-preview/store/provider";

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function New{{ inputs.model | pascal }}Page(props: Props) {
  const { base } = await copyAndNewParamsCache.parse(props.searchParams);

  const initialState = base
    ? {{ inputs.model | camel }}ServerToForm(await get{{ inputs.model | pascal }}(base))
    : {{ inputs.model | snake | upper }}_FORM_STORE_INITIAL_STATE;

  return (
    <{{ inputs.model | pascal }}FormStoreProvider initialState={initialState}>
      <main>
        <{{ inputs.model | pascal }}FormWithPreview />
      </main>
    </{{ inputs.model | pascal }}FormStoreProvider>
  );
}

```
