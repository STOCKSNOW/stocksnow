import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STOCKSNOW",
  description: "Real-time stock data, smart chatbot, and news — fast.",
  manifest: "/manifest.json",
  themeColor: "#0D1117",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg">{children}</body>
    </html>
  );
}
