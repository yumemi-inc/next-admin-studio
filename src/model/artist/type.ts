export type Artist = {
  id: string;
  adminLabel: string;
  name: string;
  iconUrl: string;
  tags: string[];
  authorized: boolean;
  creationStatus: "DRAFT" | "CONFIRMED";
};
