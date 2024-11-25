import { match } from "ts-pattern";
import type { StateCreator } from "zustand";
import { CONTENT_OPERATIONS } from "./const";
import type { Operation } from "./type";

export type OperationSlice = {
  isPending: boolean;
  current: Operation;
  dispatchOperation: (operation: Operation) => void;
};

const getNewState = (operation: Operation) =>
  match(operation)
    .with(...CONTENT_OPERATIONS, () => ({
      current: operation,
      isPending: true,
    }))
    .with("SETTLED", () => ({ current: operation, isPending: false }))
    .exhaustive();

export const createOperationSlice: StateCreator<
  OperationSlice,
  [],
  [],
  OperationSlice
> = (set) => ({
  isPending: false,
  current: "SETTLED",
  dispatchOperation: (operation) => set(getNewState(operation)),
});
