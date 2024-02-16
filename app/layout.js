import { Inter, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Felix Ramallo",
  description: "Productor Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
