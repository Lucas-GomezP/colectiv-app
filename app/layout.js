import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RegionContextProvider from "./context/RegionContext";
import MapContextProvider from "./context/MapContext";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Colectiv App",
  description: "Aplicación de recorridos de transporte público",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="h-screen w-screen">
          <RegionContextProvider>
            <MapContextProvider>
              {children}
            </MapContextProvider>
          </RegionContextProvider>
        </main>
      </body>
    </html>
  );
}
