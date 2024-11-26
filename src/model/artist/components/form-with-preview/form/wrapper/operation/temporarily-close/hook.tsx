import { Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";

import { loadingToast } from "@/common/components/toast";

import { useArtistFormOperationState } from "../../../../store/hook";

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

export const useTemporarilyCloseArtistForm = () => {
  const { loading, disabled, startOperation } =
    useArtistFormOperationState("EDIT_DRAFT");

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
