import { Stack, Text } from "@mantine/core";

import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";
import dayjs from "dayjs";

export const ArtworkSalesPeriodPreviewView = ({
  value,
}: { value: NullableDateRange }) => {
  return (
    <Stack gap={4}>
      <Text fw="bold">販売期間</Text>
      <Text>
        {value[0] && dayjs(value[0]).format("YYYY/MM/DD")} ~{" "}
        {value[1] && dayjs(value[1]).format("YYYY/MM/DD")}
      </Text>
    </Stack>
  );
};
