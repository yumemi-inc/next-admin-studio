import { useCallback } from "react";

import { errorToast, loadingToast } from "@/common/components/toast";

import {
  useArtistFormOperationState,
  useArtistFormStore,
} from "../../../../store/hook";

export const useEditConfirmedArtistForm = () => {
  const { loading, disabled, startOperation } =
    useArtistFormOperationState("EDIT_CONFIRMED");
  const getFormIsValid = useArtistFormStore((state) => state.getFormIsValid);
  const setValidationPhase = useArtistFormStore(
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
