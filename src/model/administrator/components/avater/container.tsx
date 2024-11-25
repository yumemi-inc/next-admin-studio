"use client";

import type { FC } from "react";

import { useCurrentAdministrator } from "../../hooks";
import { AdministratorAvaterView } from "./view";

export const AdministratorAvaterContainer: FC = () => {
  const administrator = useCurrentAdministrator();

  return (
    <AdministratorAvaterView
      administrator={administrator}
      logout={() => {}}
      onSettingClick={() => {}}
    />
  );
};
