import { useCallback } from "react";
import type { Operation } from "./type";

type Props = {
  isPending: boolean;
  current: Operation;
  operationType: Operation;
  dispatchOperation: (operation: Operation) => void;
};

type OperationState = {
  /** 自アクションでpendingになった場合にtrue */
  loading: boolean;
  /** 他アクションでpendingになった場合にtrue */
  disabled: boolean;
  startOperation: () => {
    settleOperation: () => void;
  };
};

export const getOperationState = ({
  isPending,
  current,
  operationType,
  dispatchOperation,
}: Props): OperationState => {
  // 自アクションでpendingになった場合にtrue
  const loading = isPending && current === operationType;
  // 他アクションでpendingになった場合にtrue
  const disabled = isPending && current !== operationType;

  const startOperation = useCallback(() => {
    dispatchOperation(operationType);
    return {
      settleOperation: () => dispatchOperation("SETTLED"),
    };
  }, [dispatchOperation, operationType]);

  return {
    loading,
    disabled,
    startOperation,
  };
};
