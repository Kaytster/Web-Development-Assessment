'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

const myImages = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Adjust the width as needed
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize); // Add event listener

    return () => window.removeEventListener('resize', checkScreenSize); // Cleanup
  }, []);

  return (

    <div> {isLargeScreen && ( <Image src="/Images/20230829_111351.jpg" alt="Our College" width={500} height={350} /> )} </div>

  );
};

export default myImages;
