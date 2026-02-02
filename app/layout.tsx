// app/layout.tsx
import Header from "./_components/Header";
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Built with Next.js 16",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
         <div className="min-h-screen flex flex-col">
      <Header />
        {children}
        </div>
      </body>
    </html>
  );
}
