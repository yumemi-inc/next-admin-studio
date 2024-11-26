---
name: 'form-input-file'
root: './src/'
output: '/model/**/components/form-with-preview'
ignore: []
questions:
  property: 'プロパティ名を入力してください (eg. thumbnail)'
  required:
    confirm: '公開時 必須項目ですか？'
    initial: true
---

# `form/inputs/{{ inputs.property }}/const.ts`

```ts
{{ model := output.path | extractModel }}
{{ name := model + '-' + inputs.property }}
export const {{ name | snake | upper }}_DEFAULT_VALUE = {
  url: "",
  file: null,
};
```

# `form/inputs/{{ inputs.property }}/hook.ts`

```ts
{{ model := output.path | extractModel }}
{{ name := model + '-' + inputs.property }}

import { useCallback } from "react";

import { uploadFile } from "@/common/lib/upload-file";

import { use{{ model | pascal }}FormStore } from "../../../store/hook";
import { {{ name | snake | upper }}_DEFAULT_VALUE } from "./const";


export const use{{ model | pascal }}{{ inputs.property | pascal }}Input = () => {
  const image = use{{ model | pascal }}FormStore((state) => state.{{ inputs.property | camel }});
  const setImage = use{{ model | pascal }}FormStore((state) => state.set{{ inputs.property | pascal }});

  const validationPhase = use{{ model | pascal }}FormStore(
    (state) => state.validationPhase,
  );
  const getErrorMessages = use{{ model | pascal }}FormStore(
    (state) => state.get{{ inputs.property | pascal }}ErrorMessages,
  );

  const errorMessages = getErrorMessages(image.url, validationPhase);

  const onUpload = useCallback(async (file: File | null) => {
    if (!file) {
      // 初期化処理
      setImage({{ name | snake | upper }}_DEFAULT_VALUE);
      return;
    };

    // ファイルのアップロード処理
    const uploadedUrl = await uploadFile(file);

    setImage({ file, url: uploadedUrl });
  }, [setImage]);

  return { file: image.file, onUpload, errorMessages };
};

```

# `form/inputs/{{ inputs.property }}/index.tsx`

```tsx
{{ model := output.path | extractModel }}

"use client";

import type { FC } from "react";

import { FileInput } from "@/common/components/form/file-input";

import { use{{ model | pascal }}{{ inputs.property | pascal }}Input } from "./hook";

export const {{ model | pascal }}{{ inputs.property | pascal }}Input: FC = () => {
  const { file, onUpload, errorMessages } = use{{ model | pascal }}{{ inputs.property | pascal }}Input();

  return (
    <FileInput
      label="ファイル選択"
      description="説明"
      placeholder="クリックして画像をアップロード"
      {{ if inputs.required }}required{{ end }}
      value={file}
      onChange={onUpload}
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
import type { FileInputValue } from "@/model/common/lib/file-upload-converter/type";

import {
  validate{{ model | pascal }}{{ inputs.property | pascal }}OnChange,
  validate{{ model | pascal }}{{ inputs.property | pascal }}OnSubmit,
} from "./validation";

export type {{ model | pascal }}{{ inputs.property | pascal }}Slice = {
  {{ inputs.property | camel }}: FileInputValue;
  set{{ inputs.property | pascal }}: ({{ inputs.property | camel }}: FileInputValue) => void;
  get{{ inputs.property | pascal }}ErrorMessages: (
    value: string,
    phase: ValidationPhase,
  ) => string[];
  get{{ inputs.property | pascal }}IsValid: () => boolean;
};

export const create{{ model | pascal }}{{ inputs.property | pascal }}Slice: FormInputSliceCreater<
  {{ model | pascal }}{{ inputs.property | pascal }}Slice,
  {
    {{ inputs.property | camel }}: FileInputValue
  }
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
    const value = get().{{ inputs.property | camel }}.url;
    const phase = get().validationPhase;
    const errorMessages = get().get{{ inputs.property | pascal }}ErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});

```

# `form/inputs/{{ inputs.property }}/validation.ts`

```ts
{{ model := output.path | extractModel }}

import { notEmptyFileInputValidation } from "@/common/lib/form-validation/file-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validate{{ model | pascal }}{{ inputs.property | pascal }}OnSubmit: MultiValidationFn<
  string
> = (v) => [notEmptyFileInputValidation(v)];

export const validate{{ model | pascal }}{{ inputs.property | pascal }}OnChange: MultiValidationFn<
  string
> = (_v) => [];

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
  {{ inputs.property | camel }}: FileInputValue;
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

import { {{ model | pascal }}{{ inputs.property | pascal }}PreviewView } from "../../../preview/{{ inputs.property }}";
import { use{{ model | pascal }}FormStore } from "../../store/hook";

export const {{ model | pascal }}{{ inputs.property | pascal }}PreviewContainer = () => {
  const {{ inputs.property | camel }} = use{{ model | pascal }}FormStore((state) => state.{{ inputs.property | camel }}.file);
  return <{{ model | pascal }}{{ inputs.property | pascal }}PreviewView value={ {{ inputs.property | camel }}} />;
};

```

# `../preview/{{ inputs.property }}/index.tsx`

```tsx
{{ model := output.path | extractModel }}

import { Text } from "@mantine/core";

export const {{ model | pascal }}{{ inputs.property | pascal }}PreviewView = ({ value }: { value: File | null }) => {
  return <Text>{value?.name}</Text>;
};

```
