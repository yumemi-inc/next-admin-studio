"use client";

import { DatesProvider } from "@mantine/dates";
import dayjs from "dayjs";
import type { FC, PropsWithChildren } from "react";

import "dayjs/locale/ja";

export const DayJSProvider: FC<PropsWithChildren> = ({ children }) => {
  dayjs.locale("ja");

  return <DatesProvider settings={{ locale: "ja" }}>{children}</DatesProvider>;
};
