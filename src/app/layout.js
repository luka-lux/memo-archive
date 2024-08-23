import { Inter } from "next/font/google";
import "./ui/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "memoArchive INTEC-SUP",
  description: "Archive des mémoires des étudiants de l'INTEC-SUP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
