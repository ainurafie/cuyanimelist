import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Utility/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CuyAnimeList",
  description: "Indonesian Website Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
