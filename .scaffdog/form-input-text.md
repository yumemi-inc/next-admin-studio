---
name: 'form-input-text'
root: './src/'
output: '/model/**/components/form-with-preview'
ignore: []
questions:
  property: 'プロパティ名を入力してください (eg. title)'
  required:
    confirm: '公開時 必須項目ですか？'
    initial: true
---

# `form/inputs/{{ inputs.property }}/const.ts`

```ts
{{ model := output.path | extractModel }}
{{ name := model + '-' + inputs.property }}
export const {{ name | snake | upper }}_DEFAULT_VALUE = "";
```

# `form/inputs/{{ inputs.property }}/hook.ts`

```ts
{{ model := output.path | extractModel }}

import { use{{ model | pascal }}FormStore } from "../../../store/hook";

export const use{{ model | pascal }}{{ inputs.property | pascal }}Input = () => {
  const value = use{{ model | pascal }}FormStore((state) => state.{{ inputs.property | camel }});
  const setValue = use{{ model | pascal }}FormStore((state) => state.set{{ inputs.property | pascal }});
  const validationPhase = use{{ model | pascal }}FormStore(
    (state) => state.validationPhase,
  );
  const getErrorMessages = use{{ model | pascal }}FormStore(
    (state) => state.get{{ inputs.property | pascal }}ErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};

```

# `form/inputs/{{ inputs.property }}/index.tsx`

```tsx
{{ model := output.path | extractModel }}

"use client";

import type { FC } from "react";

import { TextInput } from "@/common/components/form/text-input";

import { use{{ model | pascal }}{{ inputs.property | pascal }}Input } from "./hook";

export const {{ model | pascal }}{{ inputs.property | pascal }}Input: FC = () => {
  const { value, setValue, errorMessages } = use{{ model | pascal }}{{ inputs.property | pascal }}Input();

  return (
    <TextInput
      label="タイトル"
      description="タイトルです。"
      placeholder="タイトル"
      {{ if inputs.required }}required{{ end }}
      value={value}
      setValue={setValue}
      errorMessages={errorMessages}
    />
  );
};

```

# `form/inputs/{{ inputs.property }}/slice.ts`

```ts
{{ model := output.path | extractModel }}

import {
  type ValidationPhase,
  getValidationErrorMessage,
} from "@/model/common/lib/validation";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
{{ model | camel }}{{ inputs.property | pascal }}Validation,
} from "./validation";

export type {{ model | pascal }}{{ inputs.property | pascal }}Slice = {
  {{ inputs.property | camel }}: string;
  set{{ inputs.property | pascal }}: ({{ inputs.property | camel }}: string) => void;
  get{{ inputs.property | pascal }}ErrorMessages: (
    value: string,
    phase: ValidationPhase,
  ) => string[];
  get{{ inputs.property | pascal }}IsValid: () => boolean;
};

export const create{{ model | pascal }}{{ inputs.property | pascal }}Slice: FormInputSliceCreater<
  {{ model | pascal }}{{ inputs.property | pascal }}Slice,
  { {{ inputs.property | camel }}: string }
> = (initalValue) => (set, get) => ({
  {{ inputs.property | camel }}: initalValue.{{ inputs.property | camel }},
  set{{ inputs.property | pascal }}: ({{ inputs.property | camel }}) => set({ {{ inputs.property | camel }} }),
  get{{ inputs.property | pascal }}ErrorMessages: (value, phase) => {
    return getValidationErrorMessage({
      phase,
      validations: {{ model | camel }}{{ inputs.property | pascal }}Validation,
    });
  },
  get{{ inputs.property | pascal }}IsValid: () => {
    const value = get().{{ inputs.property | camel }};
    const phase = get().validationPhase;
    const errorMessages = get().get{{ inputs.property | pascal }}ErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});

```

# `form/inputs/{{ inputs.property }}/validation.ts`

```ts
{{ model := output.path | extractModel }}

import {
  maxLengthValidation,
  notEmptyInputValidation,
} from "@/common/lib/form-validation/text-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const {{ model | camel }}{{ inputs.property | pascal }}Validation = (v: string): InputValidation => ({
  onChange: [maxLengthValidation(100)(v)];
  onConfirmedSubmit: [notEmptyInputValidation(v)],
});

```

# `form/index.tsx`
<!-- formを更新 -->

```ts
{{ model := output.path | extractModel }}
import { {{ model | pascal }}{{ inputs.property | pascal }}Input } from "./inputs/{{ inputs.property }}";

{{ read output.abs | before "</" }}
<{{ model | pascal }}{{ inputs.property | pascal }}Input />
{{ read output.abs | after "</" -1 }}

```

# `form/type.ts`
<!-- formの型を更新 -->

```ts
{{ read output.abs | before "};" }}
  {{ inputs.property | camel }}: string;
{{ read output.abs | after "};" -1 }}

```


# `store/const.ts`
<!-- formの初期値を更新 -->

```ts
{{ model := output.path | extractModel }}
{{ name := model + '-' + inputs.property }}
import { {{ name | snake | upper }}_DEFAULT_VALUE } from "../form/inputs/{{ inputs.property}}/const"

{{ read output.abs | before "};" }}
  {{ inputs.property | camel }}: {{ name | snake | upper }}_DEFAULT_VALUE,
{{ read output.abs | after "};" -1 }}

```

# `store/index.ts`
<!-- formのstoreを更新 -->

```ts
{{ model := output.path | extractModel }}

import { create{{ model | pascal }}{{ inputs.property | pascal }}Slice } from "../form/inputs/{{ inputs.property}}/slice"


{{ read output.abs | before "getFormValue:" }}
      ...create{{ model | pascal }}{{ inputs.property | pascal }}Slice(initialState)(set, get, store),
{{ read output.abs | after "getFormValue:" -1 }}

// TODO: getFormIsValid に get().get{{ inputs.property | pascal }}IsValid() を追加
```

# `store/type.ts`
<!-- storeのtypeを更新 -->

```ts
{{ model := output.path | extractModel }}

import { {{ model | pascal }}{{ inputs.property | pascal }}Slice } from "../form/inputs/{{ inputs.property }}/slice";

{{ read output.abs }}
// TODO: 次を追加 {{ model | pascal }}{{ inputs.property | pascal }}Slice &

```

# `preview/{{ inputs.property }}/index.tsx`

```tsx
{{ model := output.path | extractModel }}

"use client";

import { {{ model | pascal }}{{ inputs.property | pascal }}PreviewView } from "../../../preview/{{ inputs.property }}";
import { use{{ model | pascal }}FormStore } from "../../store/hook";

export const {{ model | pascal }}{{ inputs.property | pascal }}PreviewContainer = () => {
  const {{ inputs.property | camel }} = use{{ model | pascal }}FormStore((state) => state.{{ inputs.property | camel }});
  return <{{ model | pascal }}{{ inputs.property | pascal }}PreviewView value={ {{ inputs.property | camel }}} />;
};

```

# `../preview/{{ inputs.property }}/index.tsx`

```tsx
{{ model := output.path | extractModel }}

import { Text } from "@mantine/core";

export const {{ model | pascal }}{{ inputs.property | pascal }}PreviewView = ({ value }: { value: string }) => {
  return <Text>{value}</Text>;
};

```
