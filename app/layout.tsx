import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "飲み会生存キャラ診断",
  description:
    "あなたは飲み会でどんな生き物になる？15問でわかる、あなたの社交性と人見知りの正体。",
  openGraph: {
    title: "飲み会生存キャラ診断",
    description:
      "あなたは飲み会でどんな生き物になる？15問でわかる、あなたの社交性と人見知りの正体。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "飲み会生存キャラ診断",
    description:
      "あなたは飲み会でどんな生き物になる？15問でわかる、あなたの社交性と人見知りの正体。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0d0b1e] text-white">
        {children}
      </body>
    </html>
  );
}
