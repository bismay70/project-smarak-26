import type { Metadata } from "next";
import { Inter, Crimson_Text, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    subsets: ["latin"],

    variable: "--font-poppins",
    weight: ["400"],
});
const crimson = Crimson_Text({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-crimson",
});

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Smarak 2026 | Annual Civil Engineering Fest of NIT Rourkela",
    description:
      "Join Smarak 2026, the premier civil engineering fest at NIT Rourkela from April 11–13, 2026. Participate in competitions like Gati Sheel, Vastukala, Setu, attend workshops on STAAD Pro, Revit, and 3D printing. Fusing innovation with a greener tomorrow.",

    keywords: [
      "Smarak 2026",
      "NIT Rourkela",
      "civil engineering fest",
      "Gati Sheel",
      "Vastukala",
      "Setu",
      "Shilp Setu",
      "Pramanam",
      "STAAD Pro workshop",
      "Revit workshop",
      "3D printing",
      "engineering competitions",
      "BIS Seminar",
      "sustainable engineering",
      "green infrastructure",
    ],

    authors: [{ name: "NIT Rourkela" }],
    creator: "BIS Standard Club Civil & CEST Club, NIT Rourkela",
    publisher: "NIT Rourkela",

    metadataBase: new URL("https://www.smaraknitrkl.in"),

    alternates: {
      canonical: "https://www.smaraknitrkl.in/",
    },

    openGraph: {
      title: "Smarak 2026 | Annual Civil Engineering Fest of NIT Rourkela",
      description:
        "Join Smarak 2026, the premier civil engineering fest celebrating innovation and sustainability at NIT Rourkela from April 11–13, 2026.",
      url: "https://www.smaraknitrkl.in",
      siteName: "Smarak 2026",
      images: [
        {
          url: "https://www.smaraknitrkl.in/images/banner.jpeg",
          width: 1200,
          height: 630,
          alt: "Smarak 2026 Banner",
        },
        {
          url: "https://www.smaraknitrkl.in/images/mai.jpeg",
          width: 500,
          height: 500,
          alt: "Smarak 2026 Logo",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Smarak 2026 | Annual Civil Engineering Fest of NIT Rourkela",
      description:
        "Join Smarak 2026, the premier civil engineering fest at NIT Rourkela from April 11–13, 2026.",
      images: [
        "https://www.smaraknitrkl.in/images/banner.jpeg",
      ],
      creator: "@smarak_nitr",
    },

    category: "Education",

    robots: {
      index: true,
      follow: true,
    },
  };
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${crimson.variable} ${inter.className} ${poppins.variable}`}
            >
                <Toaster />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
