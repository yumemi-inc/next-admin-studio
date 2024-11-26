---
name: 'form-input-date-time-range'
root: './src/'
output: '/model/**/components/form-with-preview'
ignore: []
questions:
  property: 'プロパティ名を入力してください (eg. period)'
  required:
    confirm: '公開時 必須項目ですか？'
    initial: true
---

# `form/inputs/{{ inputs.property }}/const.ts`

```ts
{{ model := output.path | extractModel }}
{{ name := model + '-' + inputs.property }}
import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";

export const {{ name | snake | upper }}_DEFAULT_VALUE: NullableDateRange = [null, null];
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

import { DateTimeRangeInput } from "@/common/components/form/date-time-range-input";

import { use{{ model | pascal }}{{ inputs.property | pascal }}Input } from "./hook";

export const {{ model | pascal }}{{ inputs.property | pascal }}Input: FC = () => {
  const { value, setValue, errorMessages } = use{{ model | pascal }}{{ inputs.property | pascal }}Input();

  return (
    <DateTimeRangeInput
      label="期間"
      description="説明"
      {{ if inputs.required }}required{{ end }}
      value={value}
      onChange={setValue}
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
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";

import {
  validate{{ model | pascal }}{{ inputs.property | pascal }}OnChange,
  validate{{ model | pascal }}{{ inputs.property | pascal }}OnSubmit,
} from "./validation";

export type {{ model | pascal }}{{ inputs.property | pascal }}Slice = {
  {{ inputs.property | camel }}: NullableDateRange;
  set{{ inputs.property | pascal }}: ({{ inputs.property | camel }}: NullableDateRange) => void;
  get{{ inputs.property | pascal }}ErrorMessages: (
    value: NullableDateRange,
    phase: ValidationPhase,
  ) => string[];
  get{{ inputs.property | pascal }}IsValid: () => boolean;
};

export const create{{ model | pascal }}{{ inputs.property | pascal }}Slice: FormInputSliceCreater<
  {{ model | pascal }}{{ inputs.property | pascal }}Slice,
  { {{ inputs.property | camel }}: NullableDateRange }
> = (initalValue) => (set, get) => ({
  {{ inputs.property | camel }}: initalValue.{{ inputs.property | camel }},
  set{{ inputs.property | pascal }}: ({{ inputs.property | camel }}) => set({ {{ inputs.property | camel }} }),
  get{{ inputs.property | pascal }}ErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validate{{ model | pascal }}{{ inputs.property | pascal }}OnChange(value),
        onConfirmedSubmit: validate{{ model | pascal }}{{ inputs.property | pascal }}OnSubmit(value),
      },
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
  notEmptyEndDateValidation,
  notEmptyStartDateValidation,
  startDateIsBeforeEndDateValidation,
} from "@/common/lib/form-validation/date-range-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";
import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";

export const validate{{ model | pascal }}{{ inputs.property | pascal }}OnSubmit: MultiValidationFn<
  NullableDateRange
> = (v) => [notEmptyStartDateValidation()(v), notEmptyEndDateValidation()(v)];

export const validate{{ model | pascal }}{{ inputs.property | pascal }}OnChange: MultiValidationFn<
  NullableDateRange
> = (v) => [startDateIsBeforeEndDateValidation()(v)];

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
import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";

{{ read output.abs | before "};" }}
  {{ inputs.property | camel }}: NullableDateRange;
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

import { {{ model | pascal }}{{ inputs.property | pascal }}Slice } from "../form/inputs/name/slice";

{{ read output.abs }}
// TODO: 次を追加 {{ model | pascal }}{{ inputs.property | pascal }}Slice &

```

# `preview/{{ inputs.property }}/index.tsx`

```tsx
{{ model := output.path | extractModel }}

import { {{ model | pascal }}{{ inputs.property | pascal }}PreviewView } from "../../../preview/{{ inputs.property }}";
import { use{{ model | pascal }}FormStore } from "../../store/hook";

export const {{ model | pascal }}{{ inputs.property | pascal }}PreviewContainer = () => {
  const value = use{{ model | pascal }}FormStore((state) => state.{{ inputs.property | camel }});
  return <{{ model | pascal }}{{ inputs.property | pascal }}PreviewView value={value} />;
};

```

# `../preview/{{ inputs.property }}/index.tsx`

```tsx
{{ model := output.path | extractModel }}
import { Text } from "@mantine/core";

import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";

export const {{ model | pascal }}{{ inputs.property | pascal }}PreviewView = ({ value }: { value: NullableDateRange }) => {
  return <Text>start: {value[0]?.toISOString()}, end: {value[1]?.toISOString()}</Text>;
};

```
