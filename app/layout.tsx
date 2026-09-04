import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baljinder Singh — Full Stack Developer",
  description: "Full stack developer building modern, high-performance web and AI-powered experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

// export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
