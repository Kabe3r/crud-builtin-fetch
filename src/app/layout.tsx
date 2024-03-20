import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crud with fetch",
  description: "This is the sample crud with built-in fetch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getUser = cookies().get('user');
  // // const accessDenied = true;
  
  // if (!getUser) {
  //   redirect('/login');
  // }
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
