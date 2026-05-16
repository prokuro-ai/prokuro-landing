import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata = {
  title: "Prokuro | Component Intelligence for Hardware OEMs",
  description:
    "Prokuro monitors every component in your BOM and flags EOL, tariff, and supply concentration risk before production is impacted.",
  icons: {
    icon: "/images/image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  );
}
