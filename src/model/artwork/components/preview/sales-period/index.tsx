import { Text } from "@mantine/core";

import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";

export const ArtworkSalesPeriodPreviewView = ({
  value,
}: { value: NullableDateRange }) => {
  return (
    <Text>
      start: {value[0]?.toISOString()}, end: {value[1]?.toISOString()}
    </Text>
  );
};
