import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HamburgerNavbar from "@/components/hamburgerNavbar";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Nove mogucnosti",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={open_sans.className}>
        <Navbar />
        <HamburgerNavbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}
