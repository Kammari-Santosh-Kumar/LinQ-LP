import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LinQ",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${sora.variable} antialiased overflow-x-hidden`}>
        <div className="w-full overflow-x-hidden">
          {children}
          
        </div>
         <Script
          id="cloudflare-analytics"
          strategy="afterInteractive"
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "896a765c18af4f6099fbe663827a789e"}'
        />
      </body>
    </html>
  );
}