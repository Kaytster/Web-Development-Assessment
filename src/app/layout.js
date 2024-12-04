import Header from "@/app/components/header";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        
      ...
<div className='container'>
          <Header />
          {children}
</div>
...

        <footer>
            <p>&copy; {new Date().getFullYear()} My Film Listing</p>
        </footer>

      </body>
    </html>
  );
}
