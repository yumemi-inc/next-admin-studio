import { useCallback } from "react";

import { errorToast, loadingToast } from "@/common/components/toast";

import {
  useArtworkFormOperationState,
  useArtworkFormStore,
} from "../../../../store/hook";

export const useEditDraftArtworkForm = () => {
  const { loading, disabled, startOperation } =
    useArtworkFormOperationState("EDIT_DRAFT");
  const getFormIsValid = useArtworkFormStore((state) => state.getFormIsValid);
  const setValidationPhase = useArtworkFormStore(
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
