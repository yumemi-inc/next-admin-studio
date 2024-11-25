import GeneralLayout from "./_layout";
import { Header } from "./_layout/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GeneralLayout header={<Header />}>{children}</GeneralLayout>;
}
