import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Multiplication Trainer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className=" bg-black bg-cover h-screen w-screen">{children}</div>
      </body>
    </html>
  );
}
