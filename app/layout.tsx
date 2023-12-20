import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/global.css";

const Pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "canvas-ruler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={Pretendard.className}>
      <body>{children}</body>
    </html>
  );
}
