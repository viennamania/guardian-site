import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "가디언홀딩스",
  description:
    "가디언홀딩스는 누구나 쉽게 이해하고 사용할 수 있는 디지털 자산 서비스를 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
