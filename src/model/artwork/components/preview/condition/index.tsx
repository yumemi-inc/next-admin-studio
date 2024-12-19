import { Text } from "@mantine/core";
import { ARTWORK_CONDITION_OPTIONS } from "../../form-with-preview/form/inputs/condition/const";

export const ArtworkConditionPreviewView = ({ value }: { value: string[] }) => {
  const conditions = ARTWORK_CONDITION_OPTIONS.filter((option) =>
    value.includes(option.value),
  );

  return (
    <Text fz="xs" fw="bold" c="dark.2">
      {conditions.map((condition) => `✔️${condition.label}`).join(", ")}
    </Text>
  );
};
