import type { Metadata } from "next";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Next Admin Studio",
  description:
    "Admin app made with Next.js, Mantine UI, and scaffdog templates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-mantine-color-scheme="light">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
