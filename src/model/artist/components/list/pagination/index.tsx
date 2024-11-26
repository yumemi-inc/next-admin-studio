"use client";

import { Center } from "@mantine/core";
import type { FC } from "react";

import { Pagination } from "@/model/common/components/pagination";

import { useArtistListTotalPageCount } from "./query";

export const ArtistListPagination: FC = () => {
  const total = useArtistListTotalPageCount();

  return (
    <Center>
      <Pagination total={total} />
    </Center>
  );
};
