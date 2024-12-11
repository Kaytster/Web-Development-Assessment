import Image from "next/image.js";
import "./layout.js";
import Slideshow from "./components/slideshow.js";


export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};


const Home = () => {
  return (
    <main>
      <section id="slideshow">
        {/* <p>My Slideshow</p> */}
        <Slideshow />
      </section>

      <section id="links">
      <div className="row">
        <div className="col">
          {/* <Image src="/Images/about-us.webp" alt="About Us" width={100} height={100} />  */}
          <h3>About Us</h3>
        </div>
        <div className="spaceCol" />
        <div className="col">
        {/* <Image src="/Images/facilities.webp" alt="About Us" width={100} height={100} />  */}
        <h3>Our Facilities</h3>
        </div>
        <div className="spaceCol" />
        <div className="col">
        {/* <Image src="/Images/courses.jpg" alt="About Us" width={100} height={100} /> */}
        <h3>Our Courses</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          {/* <Image src="/Images/resources.avif" alt="About Us" width={100} height={100} />  */}
          <h3>Learning Resources</h3>
        </div>
        <div className="spaceCol" />
        <div className="col">
        {/* <Image src="/Images/facilities.webp" alt="About Us" width={100} height={100} />  */}
        </div>
        <div className="spaceCol" />
        <div className="col">
        {/* <Image src="/Images/courses.jpg" alt="About Us" width={100} height={100} /> */}
        </div>
      </div>
    </section>

      <br />
      <div id="dividerSection" />
      <br />

    </main>
  );
};

export default Home;