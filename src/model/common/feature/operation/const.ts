export const CONTENT_OPERATIONS = [
  "CREATE_CONFIRMED",
  "DELETE",
  "COPY_AND_NEW",
  "CREATE_DRAFT",
  "CONFIRM_DRAFT",
  "EDIT_CONFIRMED",
  "EDIT_DRAFT",
  "TEMPORARILY_CLOSE",
  "CANCEL_TEMPORARY_CLOSE",
] as const;

export const CONTENT_OPERATION_NAME_MAPPING = {
  CREATE_CONFIRMED: { name: "確定保存" },
  DELETE: { name: "削除" },
  COPY_AND_NEW: { name: "コピーして新規作成" },
  CREATE_DRAFT: { name: "下書き保存" },
  CONFIRM_DRAFT: { name: "確定保存" },
  EDIT_CONFIRMED: { name: "更新" },
  EDIT_DRAFT: { name: "更新" },
  TEMPORARILY_CLOSE: { name: "公開停止" },
  CANCEL_TEMPORARY_CLOSE: { name: "再公開" },
} as const satisfies Record<ContentOperation, { name: string }>;

export type ContentOperation = (typeof CONTENT_OPERATIONS)[number];
