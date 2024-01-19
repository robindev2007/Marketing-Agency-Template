import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import IconContextProvider from "./context/IconContext";
import HeaderComponent from "./Header";
import WidthContainer from "@/Components/WidthContainer";
import FooterComponent from "./_components/Footer";

const inter = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mlab",
  description: "Marketing website template by Robin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <IconContextProvider>
            <HeaderComponent />
            {children}
            <WidthContainer>
              <div className="my-10 h-[2px] w-full bg-black p-0 opacity-50"></div>
            </WidthContainer>
            <FooterComponent />
          </IconContextProvider>
        </div>
      </body>
    </html>
  );
}
