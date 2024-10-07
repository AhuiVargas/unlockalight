'use client'

import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // Import the theme context

import Header from '@/components/header';

export default function HomePage() {
  const [backgroundImage, setBackgroundImage] = useState('/images/bg1.jpg');
  const { isDarkMode, toggleTheme } = useTheme(); // Access theme and toggle function from context

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) =>
        prevImage === '/images/bg1.jpg' ? '/images/bg2.jpg' : '/images/bg1.jpg'
      );
      toggleTheme()
    }, 100);

    const updateBackground = () => {
      if (window.innerWidth < 768) {
        document.body.style.backgroundSize = '100vw';  // do smt
        document.body.style.backgroundPosition = 'center top'; 
      } else {
        document.body.style.backgroundSize = '100vw'; 
        document.body.style.backgroundPosition = 'center';
      }
    };

    window.addEventListener('resize', updateBackground);
    updateBackground();

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateBackground);
    };
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // transition: 'background-image 0.4s ease-in-out',
        backgroundRepeat: 'no-repeat', 
        color: isDarkMode ? 'white' : 'black',
      }}
    >
      <Header select={() => {}}/>
    </div>
  );
}
