
import Navbar from "./components/Navbar";
import { BookProvider } from "./contexts/BookContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Author",
  description: "Created By Faisal",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <BookProvider>
          <Navbar/>
          {children}
        </BookProvider>
      </body>
    </html>
  );
}
