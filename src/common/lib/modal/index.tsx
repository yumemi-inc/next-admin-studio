import { modals } from "@mantine/modals";

export const openConfirmModal = (
  payload: Parameters<typeof modals.openConfirmModal>[0],
) => {
  modals.openConfirmModal(payload);
};
