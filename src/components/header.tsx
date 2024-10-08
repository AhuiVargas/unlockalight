import React from "react";
import Logo from "./logo";
import Link from 'next/link'

import { useTheme } from '../context/ThemeContext';

interface headerProps {
  select: (data: string) => void;
}

const Header: React.FC<headerProps> = ({ select }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { isDarkMode, toggleTheme } = useTheme();

  const navElements = [
    // { id: 0, name: "Home" },
    { id: 1, name: "About us", href: '/about' },
    { id: 2, name: "Bookings", href: '/bookings' },
    { id: 3, name: "Events", href: '/events' },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleClick = (e: any) => {
  //   select(e.target.value);
  //   setIsOpen(false)
  // };

  const navList = (isMobile: boolean) => {
    return (
      <div className={isMobile ? 'flex justify-center items-center h-screen' : ''}>
        <ul className={`flex ${isMobile ? 'flex-col items-center justify-center' : 'space-x-4'} text-lg`}>
          {navElements.map((item) => (
            <li key={item.id}>
              <Link
                className="hover:underline focus-within:underline font-medium"
                href={`${item.href}`}
                style={{
                  color: isDarkMode ? 'black' : 'white',
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  return (
    <>
      <header className="w-full h-48 p-4 grid grid-cols-6 items-center">
        {/* Logo Button (Left-Aligned) */}
        <button
          className={`flex items-end justify-start font-bold text-xl z-20 max-h-[200px] max-w-[200px]`}
          onClick={() => select("Home")}
        >
          <Logo
            fill="none"
            stroke={isDarkMode ? 'black' : 'white'}
            strokeWidth={0.5}
            />
        </button>

        {/* Navigation List (Left-Aligned in the Center Column) */}
        <div className="hidden grid-cols-subgrid col-span-3 md:block z-20">
          <nav className=" ml-[-10px]">{navList(false)}</nav>
        </div>

        {/* Hamburger Icon (Right-Aligned for Mobile) */}
        <button
          className={`z-20 md:hidden justify-self-end pr-8`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* <Hamburger open={isOpen} size={6}/> */}
        </button>

        {/* Social Icons (Right-Aligned in the Last Column) */}
        <div className="hidden md:block my-auto justify-self-end z-20 mr-4">
          {/* <Social /> */}
        </div>

        <button onClick={toggleTheme}>

        </button>


      </header>

    </>
  );
};

export default Header;
