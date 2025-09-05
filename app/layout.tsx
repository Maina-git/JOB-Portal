import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/helper/home/navbar/ResponsiveNavbar";
//import ScrollToTop from "@/components/helper/ScrollToTop";
import Provider from "@/components/Hoc/Provider";

const font = Roboto({
  weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets:["latin"]
})


export const metadata: Metadata = {
  title: "Job Portal",
  description: "Job portal landing page by Francis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
       <Provider>
        <ResponsiveNavbar/>
        {children}
        </Provider>
      </body>
    </html>
  );
}
