import '@/app/ui/global.css';
import {inter} from "@/app/ui/fonts";
import Header from "@/app/ui/components/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
          <Header/>
          {children}
      </body>
    </html>
  );
}
