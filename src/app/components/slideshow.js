'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "./slideshow.css";

// https://www.geeksforgeeks.org/how-to-add-image-carousel-in-next-js/

export const Slideshow = () => {
    return (
        <div>
            {/* <h2>My Slideshow</h2> */}
            <Carousel className="slides">
                <div>
                    <img src="/Images/20230829_111351new.jpg" alt="image1" width='100' height='100'/>
                    {/* <p className="legend">Image 1</p> */}
                </div>

                <div>
                    <img src="/Images/Cantor atrium 3.jpg" alt="image2" width={100} height={100}/>
                    {/* <p className="legend">Image 2</p> */}
                </div>

                <div>
                    <img src="/Images/IMG_0170new.jpeg" alt="image3" width={100} height={100}/>
                    {/* <p className="legend">Image 3</p> */}
                </div>
            </Carousel>
        </div>
    );
};

export const FacilitiesSlides = () => {
    return (
        <div>
            <Carousel className="slidesF">
            <div>
                <img src="/Images/Atriumnew.jpg" alt="Atrium" width='100' height='100'/>
                {/* <p className="legend">Image 1</p> */}
            </div>

            <div>
                <img src="/Images/BuildingFrontnew.jpeg" alt="Front of Building" width={100} height={100}/>
                {/* <p className="legend">Image 2</p> */}
            </div>

            <div>
                <img src="/Images/MeetingRoomnew.jpeg" alt="Meeting Room" width={100} height={100}/>
                {/* <p className="legend">Image 3</p> */}
            </div>
            <div>
                <img src="/Images/PlaystationLab2new.jpg" alt="Lab" width={100} height={100}/>
                {/* <p className="legend">Image 3</p> */}
            </div>
        </Carousel>
    </div>
    );
};

// export default Slideshow, facilitiesSlides;