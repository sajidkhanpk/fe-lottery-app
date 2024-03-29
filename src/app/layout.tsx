import { Layout } from "layout/root";
import type { Metadata } from "next";
import localFont from "next/font/local";

const proximaNova = localFont({
  src: [
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaSemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={proximaNova.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
