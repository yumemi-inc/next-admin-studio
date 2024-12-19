import { Stack, Text } from "@mantine/core";
import { ARTWORK_SALES_STYLE } from "../../form-with-preview/form/inputs/sales-style/const";
import type { ArtworkSalesStyle } from "../../form-with-preview/form/inputs/sales-style/type";

export const ArtworkSalesStylePreviewView = ({
  salesStyle,
  price,
}: {
  salesStyle: ArtworkSalesStyle;
  price: number;
}) => {
  const priceLabel =
    salesStyle === "AUCTION"
      ? "開始価格"
      : salesStyle === "FIXED_PRICE"
        ? "販売価格"
        : "";

  return (
    <Stack>
      <Stack gap={4}>
        <Text fw="bold">販売方式</Text>
        <Text>{ARTWORK_SALES_STYLE[salesStyle].label}</Text>
      </Stack>
      <Stack gap={4}>
        <Text fw="bold">{priceLabel}</Text>
        <Text>￥{price}</Text>
      </Stack>
    </Stack>
  );
};
