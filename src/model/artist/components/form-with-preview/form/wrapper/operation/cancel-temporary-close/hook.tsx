import { Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";

import { loadingToast } from "@/common/components/toast";

import { useArtistFormOperationState } from "../../../../store/hook";

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

export const useCancelTemporaryCloseArtist = () => {
  const { loading, disabled, startOperation } = useArtistFormOperationState(
    "CANCEL_TEMPORARY_CLOSE",
  );

  const onClick = async () => {
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

  return { loading, disabled, onClick };
};
