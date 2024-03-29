import type { Metadata } from "next";
import { Box, Container, CssBaseline, Paper } from "@mui/material";
import { Inter } from "next/font/google";
// import { Header } from "@/component/layout/header";
// import { Footer } from "@/component/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "スポーツの記録をお手軽に確認",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* PWAの設定 */}
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#b8e986" />
      </head>

      <body className={inter.className}>
        <CssBaseline />
        <Box sx={{ bgcolor: "#F4F4F4", minHeight: "100vh" }}>
          <Container maxWidth="xs" sx={{ padding: 0 }}>
            <Paper sx={{ px: 0, bgcolor: "white", minHeight: "100vh" }}>
              {children}
            </Paper>
          </Container>
        </Box>
      </body>
    </html>
  );
}