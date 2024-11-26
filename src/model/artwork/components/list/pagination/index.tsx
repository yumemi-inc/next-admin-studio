"use client";

import { Center } from "@mantine/core";
import type { FC } from "react";

import { Pagination } from "@/model/common/components/pagination";

import { useArtworkListTotalPageCount } from "./query";

export const ArtworkListPagination: FC = () => {
  const total = useArtworkListTotalPageCount();

  return (
    <Center>
      <Pagination total={total} />
    </Center>
  );
};
