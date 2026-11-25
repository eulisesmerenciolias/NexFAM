import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexFAM",
  description: "Tu compañero inteligente para la vida familiar."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
