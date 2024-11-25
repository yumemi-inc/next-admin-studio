import { Pagination as PaginationMantine } from "@mantine/core";
import type { FC } from "react";

import { usePagination } from "./hook";

type Props = {
  total: number;
};

export const Pagination: FC<Props> = ({ total }) => {
  const [value, onChange] = usePagination();

  return (
    <PaginationMantine
      value={value}
      onChange={onChange}
      total={total}
      radius="xl"
      withEdges={total > 5}
    />
  );
};
