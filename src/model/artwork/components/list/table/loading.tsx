"use client";

import { Skeleton, Table } from "@mantine/core";

import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";

import { generateSequentialArray } from "@/common/lib/array";

import { ArtworkTableHead } from "./head";

export const ArtworkTableListLoading = () => (
  <Table>
    <ArtworkTableHead />

    <Table.Tbody>
      {generateSequentialArray(DEFAULT_PAGE_SIZE).map((v) => (
        <Table.Tr key={v}>
          <Table.Td py="sm" px="lg" className="text-center text-gray-6">
            <Skeleton height={15} width={12} radius="md" />
          </Table.Td>
          <Table.Td py="sm">
            <Skeleton height={15} width={400} radius="md" />
          </Table.Td>
          <Table.Td py="sm">
            <Skeleton height={15} width={200} radius="md" />
          </Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  </Table>
);
