import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neha Nitin Gawali — Technical Solutions Engineer @ HPE",
  description:
    "Portfolio of Neha Nitin Gawali, a Technical Solutions Engineer at HPE specializing in Storage, Linux, Kubernetes, and Cloud Infrastructure.",
  keywords: ["Technical Solutions Engineer", "HPE", "Storage", "Linux", "Kubernetes", "Docker", "Portfolio", "Neha Nitin Gawali"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Ambient Background Glows */}
        <div className="fixed top-[-20%] left-[-15%] w-[70%] h-[70%] orange-glow pointer-events-none opacity-60 blur-[120px] z-0" />
        <div className="fixed bottom-[-20%] right-[-15%] w-[70%] h-[70%] orange-glow pointer-events-none opacity-60 blur-[120px] z-0" />

        <div className="relative min-h-screen overflow-x-hidden">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
