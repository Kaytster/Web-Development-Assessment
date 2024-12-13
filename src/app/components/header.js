import Navbar from "./navbar";
import Image from "next/image";
const Header = ({title}) => {    
  return (
    <header id="header">
      <div className="container">
      <Image src="/Images/logo.png" alt="Cantor College" width={100} height={100} />
      <h1>{title}</h1>
      </div>
      <Navbar />
    </header>
  );
};
export default Header;