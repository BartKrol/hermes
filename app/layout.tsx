import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import "./globals.css";
import { ThemeProvider } from "../components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: [
    {
      path: "../public/fonts/geist/geist-100.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/geist/geist-200.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/geist/geist-300.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/geist/geist-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/geist/geist-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/geist/geist-600.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/geist/geist-700.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/geist/geist-800.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/geist/geist-900.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: [
    {
      path: "../public/fonts/geist-mono/geist-mono-100.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-mono/geist-mono-200.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-mono/geist-mono-300.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-mono/geist-mono-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-mono/geist-mono-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-mono/geist-mono-600.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-mono/geist-mono-700.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-mono/geist-mono-800.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-mono/geist-mono-900.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return {
    title: t("title"),
    description: t("description"),
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
      userScalable: false,
    },
    themeColor: "#0c0c22",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 10%, rgba(20, 30, 100, 0.15) 0%, transparent 45%), radial-gradient(circle at 75% 75%, rgba(50, 0, 100, 0.1) 0%, transparent 50%)",
          backgroundAttachment: "fixed",
        }}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "rgba(10, 10, 40, 0.9)",
                color: "#e2e8f0",
                border: "1px solid rgba(79, 70, 229, 0.2)",
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
