'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ResponsiveImage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const imageArray = [
    "/Images/about-us.webp",
    "/Images/facilities.webp",
    "/Images/resources.avif",
    "/Images/courses.jpg"
  ]

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 600); // Adjust the width as needed
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize); // Add event listener

    return () => window.removeEventListener('resize', checkScreenSize); // Cleanup
  }, []);

  return (
    <div className="row"> 
        {isLargeScreen && imageArray.map((src, index) => ( 
            <div key={index} className="col"> 
                <Image src={src} alt={`Image ${index + 1}`} width={100} height={100} /> 
            </div> 
        ))} 
    </div>
  );
};

export default ResponsiveImage;
