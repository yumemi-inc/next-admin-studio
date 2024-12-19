import { Badge } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export const ArtistAuthorizedPreviewView = ({ value }: { value: boolean }) => {
  if (!value) return null;

  return (
    <Badge size="md" circle className="mr-[-16px]">
      <IconCheck size={14} />
    </Badge>
  );
};
