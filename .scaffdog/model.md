---
name: 'model'
root: './src'
output: '/model/'
ignore: []
questions:
  model: 'モデル名を入力してください (eg. artist)'
  path: 'パスを入力してください (eg. artists)'
  label: 'モデルの日本語表記を入力してください（eg. アーティスト）'
---

# `{{ inputs.model }}/type.ts`

```ts
import type { ContentStatus } from "@/model/common/const/content-status";

export type {{ inputs.model | pascal }} = {
  id: string;
  adminLabel: string;
  creationStatus: ContentStatus;
};

```

# `{{ inputs.model }}/mock.ts`

```ts
import type { {{ inputs.model | pascal }} } from "./type";

export const {{ inputs.model | snake | upper }}_MOCK_DATA: {{ inputs.model | pascal }}[] = [];

```

# `{{ inputs.model }}/path.ts`

```ts
export const {{ inputs.model | camel }}PathMapping = {
  pathToId: (path: string) => path.match(/\/{{ inputs.path }}\/(.+)/)?.[1],
  idToPath: (id: string) => `/{{ inputs.path }}/${id}`,
  indexPath: "/{{ inputs.path }}",
};

```


# `{{ inputs.model }}/components/index.ts`

```ts
```


# `{{ inputs.model }}/README.md`

```ts
# {{ inputs.label }}
```

# `common/const/index.ts`
<!-- 新たなモデルを追加 -->

```ts
{{ read output.abs | before "} as const;" }}
  {{ inputs.model | pascal }}: {
    label: "{{ inputs.label }}",
  },
{{ read output.abs | after "} as const;" -1 }}

```
