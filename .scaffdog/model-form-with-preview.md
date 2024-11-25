---
name: 'model-form-with-preview'
root: './src'
output: '/model/**/components'
ignore: []
questions:
  model: 'モデル名を入力してください (eg. artist)'
  label: 'モデルの日本語表記を入力してください（eg. アーティスト）'
---

# `form-with-preview/breadcrumbs/index.tsx`

```tsx
"use client";

import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { truncateText } from "@/common/lib/truncate-text";

import { MODELS } from "@/model/common/const";
import { NEW_ITEM_ID } from "@/model/common/const/key";
import { {{ inputs.model | camel }}PathMapping } from "@/model/{{ inputs.model }}/path";

import { use{{ inputs.model | pascal }}FormStore } from "../store/hook";

export const {{ inputs.model | pascal }}FormWithPreviewBreadcrumbs = () => {
  const pathname = usePathname();
  const adminLabel = use{{ inputs.model | pascal }}FormStore((state) => state.adminLabel);

  const contentId = {{ inputs.model | camel }}PathMapping.pathToId(pathname);
  const isNewItemPagePath = contentId === NEW_ITEM_ID;
  const current = isNewItemPagePath ? "新規作成" : adminLabel;

  return (
    <Breadcrumbs>
      <Anchor href={ {{ inputs.model | camel }}PathMapping.indexPath} component={Link}>
        {MODELS.{{ inputs.model | pascal }}.label}一覧
      </Anchor>
      <Text>
        {truncateText(current) || <span className="text-gray-5">Untitled</span>}
      </Text>
    </Breadcrumbs>
  );
};

```

# `form-with-preview/form/inputs/admin-label/const.ts`

```ts
export const {{ inputs.model | snale | upper }}_ADMIN_LABEL_DEFAULT_VALUE = "";
```

# `form-with-preview/form/inputs/admin-label/hook.ts`

```ts
import { use{{ inputs.model | pascal }}FormStore } from "../../../store/hook";

export const use{{ inputs.model | pascal }}AdminLabelInput = () => {
  const value = use{{ inputs.model | pascal }}FormStore((state) => state.adminLabel);
  const setValue = use{{ inputs.model | pascal }}FormStore((state) => state.setAdminLabel);
  const validationPhase = use{{ inputs.model | pascal }}FormStore(
    (state) => state.validationPhase,
  );
  const getErrorMessages = use{{ inputs.model | pascal }}FormStore(
    (state) => state.getAdminLabelErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};

```

# `form-with-preview/form/inputs/admin-label/index.tsx`

```tsx
"use client";

import type { FC } from "react";

import { TextInput } from "@/common/components/form/text-input";

import { use{{ inputs.model | pascal }}AdminLabelInput } from "./hook";

export const {{ inputs.model | pascal }}AdminLabelInput: FC = () => {
  const { value, setValue, errorMessages } = use{{ inputs.model | pascal }}AdminLabelInput();

  return (
    <TextInput
      label="管理名称"
      description="管理画面上での識別のためのラベルです。"
      placeholder="管理名称"
      value={value}
      setValue={setValue}
      disabled={false}
      errorMessages={errorMessages}
    />
  );
};

```

# `form-with-preview/form/inputs/admin-label/slice.ts`

```ts
import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validate{{ inputs.model | pascal }}AdminLabelOnChange,
  validate{{ inputs.model | pascal }}AdminLabelOnSubmit,
} from "./validation";

export type AdminLabelSlice = {
  adminLabel: string;
  setAdminLabel: (adminLabel: string) => void;
  getAdminLabelErrorMessages: (
    value: string,
    phase: ValidationPhase,
  ) => string[];
  getAdminLabelIsValid: () => boolean;
};

export const createAdminLabelSlice: FormInputSliceCreater<
  AdminLabelSlice,
  { adminLabel: string }
> = (initalValue) => (set, get) => ({
  adminLabel: initalValue.adminLabel,
  setAdminLabel: (adminLabel) => set({ adminLabel }),
  getAdminLabelErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validate{{ inputs.model | pascal }}AdminLabelOnChange(value),
        onConfirmedSubmit: validate{{ inputs.model | pascal }}AdminLabelOnSubmit(value),
      },
    });
  },
  getAdminLabelIsValid: () => {
    const value = get().adminLabel;
    const phase = get().validationPhase;
    const errorMessages = get().getAdminLabelErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});

```

# `form-with-preview/form/inputs/admin-label/validation.ts`

```ts
import {
  maxLengthValidation,
  notEmptyInputValidation,
} from "@/common/lib/form-validation/text-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validate{{ inputs.model | pascal }}AdminLabelOnSubmit: MultiValidationFn<
  string
> = (v) => [notEmptyInputValidation(v)];

export const validate{{ inputs.model | pascal }}AdminLabelOnChange: MultiValidationFn<
  string
> = (v) => [maxLengthValidation(100)(v)];

```


# `form-with-preview/form/wrapper/operation/cancel-temporary-close/button.tsx`

```tsx
import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCancelTemporaryClose{{ inputs.model | pascal }} } from "./hook";

export const CancelTemporaryClose{{ inputs.model | pascal }}Button: FC = () => {
  const { loading, disabled, formAction } =
    useCancelTemporaryClose{{ inputs.model | pascal }}();

  return (
    <Button
      variant="outline"
      color="teal"
      loading={loading}
      disabled={disabled}
      onClick={formAction}
      type="submit"
    >
      再公開
    </Button>
  );
};

```

# `form-with-preview/form/wrapper/operation/cancel-temporary-close/hook.tsx`

```tsx
import { Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";

import { loadingToast } from "@/common/components/form/toast";

import { use{{ inputs.model | pascal }}FormOperationState } from "../../../../store/hook";

const MODAL_PROPS = {
  ON_CHECK: {
    title: <Text fw="bold">再公開しますか？</Text>,
    children: <Text>公開期間内であればアプリ上に表示されます</Text>,
    labels: { confirm: "再公開", cancel: "キャンセル" },
    centered: true,
    confirmProps: { color: "teal" },
  },
  ON_SUCCESS: {
    title: <Text fw="bold">再公開しました🎉</Text>,
    innerProps: {
      modalBody: (
        <Text>
          再公開されたコンテンツは公開期間内であればアプリ上に表示されます
        </Text>
      ),
    },
    centered: true,
  },
};

export const useCancelTemporaryClose{{ inputs.model | pascal }} = () => {
  const { loading, disabled, startOperation } =
    use{{ inputs.model | pascal }}FormOperationState("CANCEL_TEMPORARY_CLOSE");

  const formAction = async () => {
    startOperation();

    openConfirmModal({
      ...MODAL_PROPS.ON_CHECK,
      onConfirm: async () => {
        const { settleOperation } = startOperation();
        // ユーザーにフィードバック
        const { settle: settleToast, error: errorToast } = loadingToast({
          message: "コンテンツを再公開しています",
        });

        // TODO
        await new Promise((resolve) => setTimeout(resolve, 500));

        settleOperation();

        // TODO
        const isErr = false;
        if (isErr) {
          errorToast({
            message: "再公開に失敗しました😣",
          });
          return;
        }

        settleToast({
          message: "コンテンツを再公開しました",
        });
      },
    });
  };

  return { loading, disabled, formAction };
};

```

# `form-with-preview/form/wrapper/operation/confirm-draft/button.tsx`

```tsx
"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useConfirmDraft{{ inputs.model | pascal }}Form } from "./hook";

export const ConfirmDraft{{ inputs.model | pascal }}FormButton: FC = () => {
  const { loading, disabled, formAction } = useConfirmDraft{{ inputs.model | pascal }}Form();

  return (
    <Button
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      確定保存
    </Button>
  );
};

```

# `form-with-preview/form/wrapper/operation/confirm-draft/hook.tsx`

```tsx
import { useCallback } from "react";

import { errorToast, loadingToast } from "@/common/components/form/toast";

import {
  use{{ inputs.model | pascal }}FormOperationState,
  use{{ inputs.model | pascal }}FormStore,
} from "../../../../store/hook";

export const useConfirmDraft{{ inputs.model | pascal }}Form = () => {
  const { loading, disabled, startOperation } =
    use{{ inputs.model | pascal }}FormOperationState("CONFIRM_DRAFT");
  const getFormIsValid = use{{ inputs.model | pascal }}FormStore(
    (state) => state.getFormIsValid,
  );
  const setValidationPhase = use{{ inputs.model | pascal }}FormStore(
    (state) => state.setValidationPhase,
  );

  const formAction = useCallback(async () => {
    // バリデーションフェーズの更新
    setValidationPhase("onConfirmedSubmit");

    // クライアント側でのバリデーション
    if (!getFormIsValid()) {
      errorToast({
        title: "入力エラー",
        message: "入力内容の修正が必要です😥",
      });
      return;
    }

    // フォームアクションの開始
    const { settleOperation } = startOperation();
    // ユーザーにフィードバック
    const { settle: settleToast, error: loadingErrorToast } = loadingToast({
      message: "コンテンツを確定保存しています",
    });

    // TODO
    await new Promise((resolve) => setTimeout(resolve, 500));

    settleOperation();

    // TODO
    const isError = false;
    if (isError) {
      loadingErrorToast({
        message: "コンテンツの確定保存に失敗しました",
      });
    }

    settleToast({
      message: "確定保存が完了しました！",
    });

    // バリデーションフェーズのリセット
    setValidationPhase("onChange");
  }, [startOperation, getFormIsValid, setValidationPhase]);

  return { loading, disabled, formAction };
};

```

# `form-with-preview/form/wrapper/operation/create-confirmed/button.tsx`

```tsx
"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCreateConfirmed{{ inputs.model | pascal }}Form } from "./hook";

export const CreateConfirmed{{ inputs.model | pascal }}FormButton: FC = () => {
  const { loading, disabled, formAction } = useCreateConfirmed{{ inputs.model | pascal }}Form();

  return (
    <Button
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      確定保存
    </Button>
  );
};

```

# `form-with-preview/form/wrapper/operation/create-confirmed/hook.tsx`

```tsx
import { useCallback } from "react";

import { errorToast, loadingToast } from "@/common/components/form/toast";

import {
  use{{ inputs.model | pascal }}FormOperationState,
  use{{ inputs.model | pascal }}FormStore,
} from "../../../../store/hook";

export const useCreateConfirmed{{ inputs.model | pascal }}Form = () => {
  const { loading, disabled, startOperation } =
    use{{ inputs.model | pascal }}FormOperationState("CREATE_CONFIRMED");
  const getFormIsValid = use{{ inputs.model | pascal }}FormStore(
    (state) => state.getFormIsValid,
  );
  const setValidationPhase = use{{ inputs.model | pascal }}FormStore(
    (state) => state.setValidationPhase,
  );

  const formAction = useCallback(async () => {
    // バリデーションフェーズの更新
    setValidationPhase("onConfirmedSubmit");

    // クライアント側でのバリデーション
    if (!getFormIsValid()) {
      errorToast({
        title: "入力エラー",
        message: "入力内容の修正が必要です😥",
      });
      return;
    }

    // フォームアクションの開始
    const { settleOperation } = startOperation();
    // ユーザーにフィードバック
    const { settle: settleToast, error: loadingErrorToast } = loadingToast({
      message: "コンテンツを確定保存しています",
    });

    // TODO
    await new Promise((resolve) => setTimeout(resolve, 500));

    settleOperation();

    // TODO
    const isError = false;
    if (isError) {
      loadingErrorToast({
        message: "コンテンツの確定保存に失敗しました",
      });
    }

    settleToast({
      message: "確定保存が完了しました！",
    });

    // バリデーションフェーズのリセット
    setValidationPhase("onChange");
  }, [startOperation, getFormIsValid, setValidationPhase]);

  return { loading, disabled, formAction };
};

```

# `form-with-preview/form/wrapper/operation/create-draft/button.tsx`

```tsx
"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCreateDraft{{ inputs.model | pascal }}Form } from "./hook";

export const CreateDraft{{ inputs.model | pascal }}FormButton: FC = () => {
  const { loading, disabled, formAction } = useCreateDraft{{ inputs.model | pascal }}Form();

  return (
    <Button
      variant="outline"
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      下書き保存
    </Button>
  );
};

```

# `form-with-preview/form/wrapper/operation/create-draft/hook.tsx`

```tsx
import { useCallback } from "react";

import { errorToast, loadingToast } from "@/common/components/form/toast";

import {
  use{{ inputs.model | pascal }}FormOperationState,
  use{{ inputs.model | pascal }}FormStore,
} from "../../../../store/hook";

export const useCreateDraft{{ inputs.model | pascal }}Form = () => {
  const { loading, disabled, startOperation } =
    use{{ inputs.model | pascal }}FormOperationState("CREATE_DRAFT");
  const getFormIsValid = use{{ inputs.model | pascal }}FormStore(
    (state) => state.getFormIsValid,
  );
  const setValidationPhase = use{{ inputs.model | pascal }}FormStore(
    (state) => state.setValidationPhase,
  );

  const formAction = useCallback(async () => {
    // バリデーションフェーズの更新
    setValidationPhase("onDraftSubmit");

    // クライアント側でのバリデーション
    if (!getFormIsValid()) {
      errorToast({
        title: "入力エラー",
        message: "入力内容の修正が必要です😥",
      });
      return;
    }

    // フォームアクションの開始
    const { settleOperation } = startOperation();
    // ユーザーにフィードバック
    const { settle: settleToast, error: loadingErrorToast } = loadingToast({
      message: "コンテンツを下書き保存しています",
    });

    // TODO
    await new Promise((resolve) => setTimeout(resolve, 500));

    settleOperation();

    // TODO
    const isError = false;
    if (isError) {
      loadingErrorToast({
        message: "コンテンツの下書き保存に失敗しました",
      });
      return;
    }

    settleToast({
      message: "下書き保存が完了しました！",
    });

    // バリデーションフェーズのリセット
    setValidationPhase("onChange");
  }, [startOperation, getFormIsValid, setValidationPhase]);

  return { loading, disabled, formAction };
};

```

# `form-with-preview/form/wrapper/operation/delete/query.ts`

```ts
export const delete{{ inputs.model | pascal }} = async (id: string) => {
  console.info(id);
};

```

# `form-with-preview/form/wrapper/operation/edit-confirmed/button.tsx`

```tsx
"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useEditConfirmed{{ inputs.model | pascal }}Form } from "./hook";

export const EditConfirmed{{ inputs.model | pascal }}FormButton: FC = () => {
  const { loading, disabled, formAction } = useEditConfirmed{{ inputs.model | pascal }}Form();

  return (
    <Button
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      更新
    </Button>
  );
};

```

# `form-with-preview/form/wrapper/operation/edit-confirmed/hook.tsx`

```tsx
import { useCallback } from "react";

import { errorToast, loadingToast } from "@/common/components/form/toast";

import {
  use{{ inputs.model | pascal }}FormOperationState,
  use{{ inputs.model | pascal }}FormStore,
} from "../../../../store/hook";

export const useEditConfirmed{{ inputs.model | pascal }}Form = () => {
  const { loading, disabled, startOperation } =
    use{{ inputs.model | pascal }}FormOperationState("EDIT_CONFIRMED");
  const getFormIsValid = use{{ inputs.model | pascal }}FormStore(
    (state) => state.getFormIsValid,
  );
  const setValidationPhase = use{{ inputs.model | pascal }}FormStore(
    (state) => state.setValidationPhase,
  );

  const formAction = useCallback(async () => {
    // バリデーションフェーズの更新
    setValidationPhase("onConfirmedSubmit");

    // クライアント側でのバリデーション
    if (!getFormIsValid()) {
      errorToast({
        title: "入力エラー",
        message: "入力内容の修正が必要です😥",
      });
      return;
    }

    // フォームアクションの開始
    const { settleOperation } = startOperation();
    // ユーザーにフィードバック
    const { settle: settleToast, error: loadingErrorToast } = loadingToast({
      message: "コンテンツを確定保存しています",
    });

    // TODO
    await new Promise((resolve) => setTimeout(resolve, 500));

    settleOperation();

    // TODO
    const isError = false;
    if (isError) {
      loadingErrorToast({
        message: "コンテンツの更新に失敗しました",
      });
    }

    settleToast({
      message: "更新が完了しました！",
    });

    // バリデーションフェーズのリセット
    setValidationPhase("onChange");
  }, [startOperation, getFormIsValid, setValidationPhase]);

  return { loading, disabled, formAction };
};

```

# `form-with-preview/form/wrapper/operation/edit-draft/button.tsx`

```tsx
"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useEditDraft{{ inputs.model | pascal }}Form } from "./hook";

export const EditDraft{{ inputs.model | pascal }}FormButton: FC = () => {
  const { loading, disabled, formAction } = useEditDraft{{ inputs.model | pascal }}Form();

  return (
    <Button
      variant="outline"
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      更新
    </Button>
  );
};

```

# `form-with-preview/form/wrapper/operation/edit-draft/hook.tsx`

```tsx
import { useCallback } from "react";

import { errorToast, loadingToast } from "@/common/components/form/toast";

import {
  use{{ inputs.model | pascal }}FormOperationState,
  use{{ inputs.model | pascal }}FormStore,
} from "../../../../store/hook";

export const useEditDraft{{ inputs.model | pascal }}Form = () => {
  const { loading, disabled, startOperation } =
    use{{ inputs.model | pascal }}FormOperationState("EDIT_DRAFT");
  const getFormIsValid = use{{ inputs.model | pascal }}FormStore(
    (state) => state.getFormIsValid,
  );
  const setValidationPhase = use{{ inputs.model | pascal }}FormStore(
    (state) => state.setValidationPhase,
  );

  const formAction = useCallback(async () => {
    // バリデーションフェーズの更新
    setValidationPhase("onDraftSubmit");

    // クライアント側でのバリデーション
    if (!getFormIsValid()) {
      errorToast({
        title: "入力エラー",
        message: "入力内容の修正が必要です😥",
      });
      return;
    }

    // フォームアクションの開始
    const { settleOperation } = startOperation();
    // ユーザーにフィードバック
    const { settle: settleToast, error: loadingErrorToast } = loadingToast({
      message: "コンテンツを確定保存しています",
    });

    // TODO
    await new Promise((resolve) => setTimeout(resolve, 500));

    settleOperation();

    // TODO
    const isError = false;
    if (isError) {
      loadingErrorToast({
        message: "コンテンツの更新に失敗しました",
      });
      return;
    }

    settleToast({
      message: "更新が完了しました！",
    });

    // バリデーションフェーズのリセット
    setValidationPhase("onChange");
  }, [startOperation, getFormIsValid, setValidationPhase]);

  return { loading, disabled, formAction };
};

```


# `form-with-preview/form/wrapper/operation/temporarily-close/button.tsx`

```tsx
"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useTemporarilyClose{{ inputs.model | pascal }}Form } from "./hook";

export const TemporarilyClose{{ inputs.model | pascal }}FormButton: FC = () => {
  const { loading, disabled, formAction } =
    useTemporarilyClose{{ inputs.model | pascal }}Form();

  return (
    <Button
      variant="outline"
      color="red"
      loading={loading}
      disabled={disabled}
      onClick={formAction}
      type="submit"
    >
      公開停止
    </Button>
  );
};

```

# `form-with-preview/form/wrapper/operation/temporarily-close/hook.tsx`

```tsx
import { Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";

import { loadingToast } from "@/common/components/form/toast";

import { use{{ inputs.model | pascal }}FormOperationState } from "../../../../store/hook";

const MODAL_PROPS = {
  ON_CHECK: {
    title: <Text fw="bold">公開停止してよろしいですか？</Text>,
    children: <Text>再び公開することはいつでも可能です</Text>,
    labels: { confirm: "公開停止", cancel: "キャンセル" },
    centered: true,
    confirmProps: { color: "red" },
  },
  ON_SUCCESS: {
    title: <Text fw="bold">公開停止しました🛑</Text>,
    innerProps: {
      modalBody: <Text>再び公開することはいつでも可能です</Text>,
    },
    centered: true,
  },
};

export const useTemporarilyClose{{ inputs.model | pascal }}Form = () => {
  const { loading, disabled, startOperation } =
    use{{ inputs.model | pascal }}FormOperationState("EDIT_DRAFT");

  const formAction = async () => {
    startOperation();

    openConfirmModal({
      ...MODAL_PROPS.ON_CHECK,
      onConfirm: async () => {
        // サーバーに送信
        const { settleOperation } = startOperation();
        // ユーザーにフィードバック
        const { settle: settleToast, error: errorToast } = loadingToast({
          message: "コンテンツを公開停止しています",
        });

        // TODO
        await new Promise((resolve) => setTimeout(resolve, 500));

        settleOperation();

        // TODO
        const isErr = false;
        if (isErr) {
          errorToast({
            message: "公開停止に失敗しました😣",
          });
          return;
        }

        settleToast({
          message: "コンテンツを公開停止しました",
        });
      },
    });
  };

  return {
    loading,
    disabled,
    formAction,
  };
};

```

# `form-with-preview/form/wrapper/footer.tsx`

```tsx
"use client";

import { Flex, Tooltip } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import type { FC } from "react";

import { ContentFormFooterTamplate } from "@/model/common/components/content-form-footer-template";
import { NEW_ITEM_ID } from "@/model/common/const/key";
import { {{ inputs.model | camel }}PathMapping } from "@/model/{{ inputs.model }}/path";

import { use{{ inputs.model | pascal }}ContentStatus } from "../../hooks/content-status";
import { CancelTemporaryClose{{ inputs.model | pascal }}Button } from "./operation/cancel-temporary-close/button";
import { ConfirmDraft{{ inputs.model | pascal }}FormButton } from "./operation/confirm-draft/button";
import { CreateConfirmed{{ inputs.model | pascal }}FormButton } from "./operation/create-confirmed/button";
import { CreateDraft{{ inputs.model | pascal }}FormButton } from "./operation/create-draft/button";
import { EditConfirmed{{ inputs.model | pascal }}FormButton } from "./operation/edit-confirmed/button";
import { EditDraft{{ inputs.model | pascal }}FormButton } from "./operation/edit-draft/button";
import { TemporarilyClose{{ inputs.model | pascal }}FormButton } from "./operation/temporarily-close/button";

export const {{ inputs.model | pascal }}FormFooter: FC = () => {
  const pathname = usePathname();
  const contentId = {{ inputs.model | camel }}PathMapping.pathToId(pathname) ?? NEW_ITEM_ID;
  const status = use{{ inputs.model | pascal }}ContentStatus(contentId);

  return (
    <ContentFormFooterTamplate
      status={status}
      footer={ {
        onNew: <New{{ inputs.model | pascal }}FormFooter />,
        onDraft: <Draft{{ inputs.model | pascal }}FormFooter />,
        onConfirmed: <Confirmed{{ inputs.model | pascal }}FormFooter />,
        onTemporarilyClosed: <TemporarilyClosed{{ inputs.model | pascal }}FormFooter />,
      } }
    />
  );
};

const FOOTER_STYLE = {
  borderTop: "1px solid #ccc",
};

const New{{ inputs.model | pascal }}FormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Tooltip
          label={
            <span>
              下書きはアプリに表示されません
              <br />
              確定保存の後も一部内容は編集可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <Flex align="center" gap="sm">
        <CreateDraft{{ inputs.model | pascal }}FormButton />
        <CreateConfirmed{{ inputs.model | pascal }}FormButton />
      </Flex>
    </Flex>
  );
};

const Draft{{ inputs.model | pascal }}FormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Tooltip
          label={
            <span>
              下書きはアプリに表示されません
              <br />
              確定保存の後も一部内容は編集可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <Flex align="center" gap="sm">
        <EditDraft{{ inputs.model | pascal }}FormButton />
        <ConfirmDraft{{ inputs.model | pascal }}FormButton />
      </Flex>
    </Flex>
  );
};

const Confirmed{{ inputs.model | pascal }}FormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <TemporarilyClose{{ inputs.model | pascal }}FormButton />

        <Tooltip
          label={
            <span>
              公開停止するとアプリ上に現れなくなります
              <br />
              公開停止後も再公開は可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>
      <EditConfirmed{{ inputs.model | pascal }}FormButton />
    </Flex>
  );
};

const TemporarilyClosed{{ inputs.model | pascal }}FormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <CancelTemporaryClose{{ inputs.model | pascal }}Button />
        <Tooltip
          label="再公開すると、公開期間内であればアプリ上に現れるようになります😄"
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <EditConfirmed{{ inputs.model | pascal }}FormButton />
    </Flex>
  );
};

```

# `form-with-preview/form/wrapper/header.tsx`

```tsx
"use client";

import { Divider, Flex, Title } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import type { FC } from "react";

import { FormMenuButton } from "@/model/common/components/form-menu";
import { NEW_ITEM_ID } from "@/model/common/const/key";
import { {{ inputs.model | camel }}PathMapping } from "@/model/{{ inputs.model }}/path";

import { use{{ inputs.model | pascal }}ServerState } from "../../hooks/server-state";
import { {{ inputs.model | camel }}ServerToForm } from "../../lib/server-to-form";
import { {{ inputs.model | snake | upper }}_FORM_STORE_INITIAL_STATE } from "../../store/const";
import { use{{ inputs.model | pascal }}FormStore } from "../../store/hook";
import { delete{{ inputs.model | pascal }} } from "./operation/delete/query";

export const {{ inputs.model | pascal }}FormHeader: FC = () => {
  const pathname = usePathname();
  const contentId = {{ inputs.model | camel }}PathMapping.pathToId(pathname) ?? NEW_ITEM_ID;
  const router = useRouter();
  const serverState = use{{ inputs.model | pascal }}ServerState(contentId);
  const setFormValue = use{{ inputs.model | pascal }}FormStore((state) => state.setFormValue);

  const isNewItem = contentId === NEW_ITEM_ID;
  const title = `{{ inputs.label }} ${isNewItem ? "新規作成" : "詳細"}`;

  const isDraft = serverState?.creationStatus === "DRAFT";

  const onDelete = async () => {
    await delete{{ inputs.model | pascal }}(contentId);
  };

  const onReset = () => {
    setFormValue({{ inputs.model | snake | upper }}_FORM_STORE_INITIAL_STATE);
    if (!isNewItem) {
      // もともとの値を復元する
      setFormValue({{ inputs.model | camel }}ServerToForm(serverState));
    }
  };

  const onCopyAndNew = () => {
    router.push(
      `${ {{ inputs.model | camel }}PathMapping.idToPath(NEW_ITEM_ID)}?base=${contentId}`,
    );
  };

  return (
    <>
      <Flex justify="space-between" align="center" p="lg">
        <Title order={3}>{title}</Title>
        <FormMenuButton
          onDelete={onDelete}
          onReset={onReset}
          isDeletable={isDraft}
          isCopyable={!isNewItem}
          onCopyAndNew={onCopyAndNew}
        />
      </Flex>
      <Divider />
    </>
  );
};

```

# `form-with-preview/form/wrapper/index.tsx`

```tsx
import type { FC, PropsWithChildren } from "react";

import { ContentFormTemplate } from "@/model/common/components/content-form-template";

import { {{ inputs.model | pascal }}FormFooter } from "./footer";
import { {{ inputs.model | pascal }}FormHeader } from "./header";

export const {{ inputs.model | pascal }}FormWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ContentFormTemplate
      header={<{{ inputs.model | pascal }}FormHeader />}
      footer={<{{ inputs.model | pascal }}FormFooter />}
    >
      {children}
    </ContentFormTemplate>
  );
};

```

# `form-with-preview/form/index.tsx`

```tsx
import type { FC } from "react";

import { {{ inputs.model | pascal }}AdminLabelInput } from "./inputs/admin-label";
import { {{ inputs.model | pascal }}FormWrapper } from "./wrapper";

export const {{ inputs.model | pascal }}Form: FC = () => {
  return (
    <{{ inputs.model | pascal }}FormWrapper>
      <{{ inputs.model | pascal }}AdminLabelInput />
    </{{ inputs.model | pascal }}FormWrapper>
  );
};

```

# `form-with-preview/form/type.ts`

```ts
export type {{ inputs.model | pascal }}Form = {
  adminLabel: string;
};

```


# `form-with-preview/hooks/content-status.ts`

```ts
import {
  CONTENT_STATUS,
  type ContentStatus,
} from "@/model/common/const/content-status";

import { use{{ inputs.model | pascal }}ServerState } from "./server-state";

export const use{{ inputs.model | pascal }}ContentStatus = (id: string): ContentStatus => {
  const serverState = use{{ inputs.model | pascal }}ServerState(id);
  return serverState?.creationStatus ?? CONTENT_STATUS.NEW;
};

```

# `form-with-preview/hooks/server-state.ts`

```ts
import { get{{ inputs.model | pascal }} } from "../query";

export const use{{ inputs.model | pascal }}ServerState = (id: string) => {
  // TanstackやURQLなど、キャッシュの更新機能があるライブラリを使うと良い
  return get{{ inputs.model | pascal }}(id);
};

```

# `form-with-preview/lib/server-to-form.ts`

```ts
import type { {{ inputs.model | pascal }} } from "@/model/{{ inputs.model }}/type";

import type { {{ inputs.model | pascal }}Form } from "../form/type";
import { {{ inputs.model | snake | upper }}_FORM_STORE_INITIAL_STATE } from "../store/const";

export const {{ inputs.model | camel }}ServerToForm = (
  serverState: {{ inputs.model | pascal }} | undefined,
): {{ inputs.model | pascal }}Form => {
  if (!serverState) return {{ inputs.model | snake | upper }}_FORM_STORE_INITIAL_STATE;

  return {
    ...serverState,
  };
};

```

# `form-with-preview/preview/index.tsx`

```tsx
import { {{ inputs.model | pascal }}PreviewTemplate } from "../../preview/template";

export const {{ inputs.model | pascal }}FormPreview = () => {
  return (
    <{{ inputs.model | pascal }}PreviewTemplate />
  );
};

```

# `form-with-preview/query/index.ts`

```ts
import { NEW_ITEM_ID } from "@/model/common/const/key";
import { {{ inputs.model | snake | upper }}_MOCK_DATA } from "@/model/{{ inputs.model }}/mock";

import type { {{ inputs.model | pascal }} } from "../../../type";

export const get{{ inputs.model | pascal }} = (id: string): {{ inputs.model | pascal }} | undefined => {
  if (id === NEW_ITEM_ID) return undefined;

  const {{ inputs.model | camel }} = {{ inputs.model | snake | upper }}_MOCK_DATA.find(
    ({{ inputs.model | camel }}) => {{ inputs.model | camel }}.id === id,
  );

  return {{ inputs.model | camel }};
};

```

# `form-with-preview/store/const.ts`

```ts
import type { {{ inputs.model | pascal }}Form } from "../form/type";
import { {{ inputs.model | snale | upper }}_ADMIN_LABEL_DEFAULT_VALUE } from "../form/inputs/admin-label/const"

export const {{ inputs.model | snake | upper }}_FORM_STORE_INITIAL_STATE: {{ inputs.model | pascal }}Form = {
  adminLabel: {{ inputs.model | snale | upper }}_ADMIN_LABEL_DEFAULT_VALUE,
};

```

# `form-with-preview/store/hook.ts`

```ts
import { useContext } from "react";
import { useStore } from "zustand";

import type { ContentOperation } from "@/model/common/feature/operation/const";
import { getOperationState } from "@/model/common/feature/operation/lib";

import { {{ inputs.model | pascal }}FormStoreContext } from "./provider";
import type { {{ inputs.model | pascal }}FormStore } from "./type";

export const use{{ inputs.model | pascal }}FormStore = <T>(
  selector: (store: {{ inputs.model | pascal }}FormStore) => T,
): T => {
  const {{ inputs.model | camel }}FormStoreContext = useContext({{ inputs.model | pascal }}FormStoreContext);

  if (!{{ inputs.model | camel }}FormStoreContext) {
    throw new Error(
      "use{{ inputs.model | pascal }}FormStore must be used within {{ inputs.model | pascal }}FormStoreProvider",
    );
  }

  return useStore({{ inputs.model | camel }}FormStoreContext, selector);
};

export const use{{ inputs.model | pascal }}FormOperationState = (
  operationType: ContentOperation,
) => {
  const isPending = use{{ inputs.model | pascal }}FormStore((state) => state.isPending);
  const current = use{{ inputs.model | pascal }}FormStore((state) => state.current);
  const dispatchOperation = use{{ inputs.model | pascal }}FormStore(
    (state) => state.dispatchOperation,
  );

  return getOperationState({
    isPending,
    current,
    operationType,
    dispatchOperation,
  });
};

```

# `form-with-preview/store/index.ts`

```ts
import { create } from "zustand";

import { createOperationSlice } from "@/model/common/feature/operation/slice";
import { createValidationSlice } from "@/model/common/store/form";

import { createAdminLabelSlice } from "../form/inputs/admin-label/slice";
import type { {{ inputs.model | pascal }}Form } from "../form/type";
import type { {{ inputs.model | pascal }}FormStore } from "./type";

export const create{{ inputs.model | pascal }}FormStore = (initialState: {{ inputs.model | pascal }}Form) =>
  create<{{ inputs.model | pascal }}FormStore>()((set, get, store) => {
    return {
      ...createOperationSlice(set, get, store),
      ...createValidationSlice(set, get, store),
      ...createAdminLabelSlice(initialState)(set, get, store),
      getFormValue: get,
      setFormValue: ({{ inputs.model | camel }}Form) => set({{ inputs.model | camel }}Form),
      getFormIsValid: () => {
        return get().getAdminLabelIsValid();
      }
    };
  });

```

# `form-with-preview/store/provider.tsx`

```tsx
"use client";

import { type FC, type ReactNode, createContext, useRef } from "react";

import { create{{ inputs.model | pascal }}FormStore } from ".";
import type { {{ inputs.model | pascal }}Form } from "../form/type";

export type {{ inputs.model | pascal }}FormStoreApi = ReturnType<
  typeof create{{ inputs.model | pascal }}FormStore
>;

export const {{ inputs.model | pascal }}FormStoreContext = createContext<
  {{ inputs.model | pascal }}FormStoreApi | undefined
>(undefined);

export const {{ inputs.model | pascal }}FormStoreProvider: FC<{
  children: ReactNode;
  initialState: {{ inputs.model | pascal }}Form;
}> = ({ children, initialState }) => {
  const storeRef = useRef<{{ inputs.model | pascal }}FormStoreApi>();
  if (!storeRef.current) {
    storeRef.current = create{{ inputs.model | pascal }}FormStore(initialState);
  }

  return (
    <{{ inputs.model | pascal }}FormStoreContext.Provider value={storeRef.current}>
      {children}
    </{{ inputs.model | pascal }}FormStoreContext.Provider>
  );
};

```

# `form-with-preview/store/type.ts`

```ts
import type { CommonFormSlice } from "@/model/common/store/form";

import type { AdminLabelSlice } from "../form/inputs/admin-label/slice";
import type { {{ inputs.model | pascal }}Form } from "../form/type";

export type {{ inputs.model | pascal }}FormStore = AdminLabelSlice &

CommonFormSlice<{{ inputs.model | pascal }}Form>;

```

# `form-with-preview/index.tsx`

```tsx
import { ScrollArea, SimpleGrid, Space, Stack, Text } from "@mantine/core";

import { {{ inputs.model | pascal }}FormWithPreviewBreadcrumbs } from "./breadcrumbs";
import { {{ inputs.model | pascal }}Form } from "./form";
import { {{ inputs.model | pascal }}FormPreview } from "./preview";

export const {{ inputs.model | pascal }}FormWithPreview = () => {
  return (
    <SimpleGrid cols={2}>
      <Stack p="xl">
        <{{ inputs.model | pascal }}FormWithPreviewBreadcrumbs />
        <Space h={32} />
        <ScrollArea className="h-[calc(100vh-210px)]" type="never">
          <Stack justify="center" align="center" gap="lg">
            <{{ inputs.model | pascal }}FormPreview />
            <Text c="gray" size="sm">
              プレビューは実際の見た目とは異なる可能性があります
            </Text>
          </Stack>
        </ScrollArea>
      </Stack>

      <{{ inputs.model | pascal }}Form />
    </SimpleGrid>
  );
};

```
