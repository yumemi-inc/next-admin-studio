"use client";

import {
  MantineProvider as MantineProviderPrimitive,
  createTheme,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

import type { FC, PropsWithChildren } from "react";

// 1. mantine ui stylesheet
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";

// 2. tailwindcss stylesshieet
import "../globals.css";

export const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "blue",
});

export const MantineProvider: FC<PropsWithChildren> = ({ children }) => (
  <MantineProviderPrimitive theme={theme}>
    <ModalsProvider>
      <Notifications />
      {children}
    </ModalsProvider>
  </MantineProviderPrimitive>
);
