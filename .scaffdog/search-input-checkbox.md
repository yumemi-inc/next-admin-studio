---
name: 'search-input-checkbox'
root: './src/'
output: '/model/**/components/list/search'
ignore: []
questions:
  property: 'プロパティ名を入力してください (eg. categories)'
---

# `inputs/{{ inputs.property }}/index.tsx`

```tsx
{{ model := output.path | extractModel }}
"use client";

import { type FC, useMemo } from "react";

import { CheckboxGroup } from "@/common/components/form/checkbox-group";

import { use{{ model | pascal }}SearchStore } from "../../store/hook";

export const {{ model | pascal }}{{ inputs.property | pascal }}SearchInput: FC = () => {
  const value = use{{ model | pascal }}SearchStore((state) => state.{{ inputs.property | camel }});
  const setValue = use{{ model | pascal }}SearchStore((state) => state.set{{ inputs.property | pascal }});

  return (
    <CheckboxGroup
      label="種別"
      description="種別で絞り込みます。"
      // TODO
      options={[]}
      value={value}
      onChange={setValue}
    />
  );
};

```

# `inputs/{{ inputs.property }}/slice.ts`

```ts
{{ model := output.path | extractModel }}
import type { StateCreator } from "zustand";

export type {{ model | pascal }}{{ inputs.property | pascal }}SearchInputSlice = {
  {{ inputs.property | camel }}: string[];
  set{{ inputs.property | pascal }}: ({{ inputs.property | camel }}: string[]) => void;
};

export const create{{ model | pascal }}{{ inputs.property | pascal }}SearchInputSlice =
  (initialState: {
    {{ inputs.property | camel }}: string[];
  }): StateCreator<{{ model | pascal }}{{ inputs.property | pascal }}SearchInputSlice> =>
  (set) => ({
    {{ inputs.property | camel }}: initialState.{{ inputs.property | camel }},
    set{{ inputs.property | pascal }}: ({{ inputs.property | camel }}) => set({ {{ inputs.property | camel }} }),
  });

```

# `inputs/type.ts`

```ts
{{ read output.abs | before "};" }}
  {{ inputs.property | camel }}: string[];
{{ read output.abs | after "};" -1 }}

```

# `lib/form-to-param.ts`

```ts
{{ read output.abs | before "};" }}
  {{ inputs.property | camel }}: form.{{ inputs.property | camel }},
{{ read output.abs | after "};" -1 }}
```

# `lib/param-to-form.ts`

```ts
{{ read output.abs | before "};" }}
  {{ inputs.property | camel }}: params.{{ inputs.property | camel }},
{{ read output.abs | after "};" -1 }}
```

# `params/index.ts`

```ts
{{ read output.abs | before "};" }}
  {{ inputs.property | camel }}: parseAsArrayOf(parseAsString).withDefault([]),
{{ read output.abs | after "};" -1 }}
```

# `store/index.ts`

```ts
{{ model := output.path | extractModel }}
import { create{{ model | pascal }}{{ inputs.property | pascal }}SearchInputSlice } from "../inputs/{{ inputs.property }}/slice";
{{ read output.abs | before "getSearchFormValue: get," }}
    ...create{{ model | pascal }}{{ inputs.property | pascal }}SearchInputSlice(initialState)(set, get, store),
{{ read output.abs | after "getSearchFormValue: get," -1 }}
```

# `store/type.ts`

```ts
{{ model := output.path | extractModel }}
import { {{ model | pascal }}{{ inputs.property | pascal }}SearchInputSlice } from "../inputs/{{ inputs.property }}/slice";
{{ read output.abs | before "StatusSearchInputSlice;" }}
    {{ model | pascal }}{{ inputs.property | pascal }}SearchInputSlice &
{{ read output.abs | after "StatusSearchInputSlice;" -1 }}
```

# `index.tsx`

```ts
{{ model := output.path | extractModel }}
import { {{ model | pascal }}{{ inputs.property | pascal }}SearchInput } from "./inputs/{{ inputs.property }}";
{{ read output.abs | before "</>" }}
    <{{ model | pascal }}{{ inputs.property | pascal }}SearchInput />
{{ read output.abs | after "</>" -1 }}
```

