import { Table } from "@mantine/core";

export const ArtworkTableHead = () => (
  <Table.Thead>
    <Table.Tr>
      <Table.Th w={12} className="text-center">
        No.
      </Table.Th>
      <Table.Th w={400}>管理名称</Table.Th>
      <Table.Th w={200}>販売方式</Table.Th>
    </Table.Tr>
  </Table.Thead>
);
