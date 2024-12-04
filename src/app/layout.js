import Header from "@/app/components/header";
import "@/app/global.css";
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
