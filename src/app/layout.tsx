import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zespol XI",
  description: "Strona dla programowania zespolowego 2024/25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[auto_1fr_auto] min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        // enableSystem
        // disableTransitionOnChange
        >
          {/* add padding because header is fixed */}
          <div className="h-10">
            <Header />
          </div>

          {children}
          {/* <main className="container mx-auto p-4 sm:mt-10">{children}</main> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
