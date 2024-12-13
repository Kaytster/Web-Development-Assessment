import Header from "@/app/components/header";
import Link from "next/link";
import "@/app/global.css";
import "@/app/styles/mobile.css";
import "@/app/styles/desktop.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
    
      <body>
          <Header />
          {children}
          
        <footer>
            <p>&copy; {new Date().getFullYear()} My Film Listing</p>
        </footer>

      </body>
    </html>
  );
}
