export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        
        <div className='container'>
        <header>
          <h1>My Next Page</h1>
        </header>
        {children}
        </div>

        <footer>
            <p>&copy; {new Date().getFullYear()} My Film Listing</p>
        </footer>

      </body>
    </html>
  );
}
