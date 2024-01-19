import WidthContainer from "@/Components/WidthContainer";
import IconContextProvider from "../context/IconContext";
import HeaderComponent from "./Header";
import FooterComponent from "./_components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
