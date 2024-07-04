import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../_components/sidebar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Announcement",
  description: "An announcement website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4 bg-whitesmoke">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
