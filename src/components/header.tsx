import React from "react";
import Logo from "./logo";

interface headerProps {
  select: (data: string) => void;
}

const Header: React.FC<headerProps> = ({ select }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navElements = [
    // { id: 0, name: "Home" },
    { id: 1, name: "About us" },
    { id: 2, name: "Bookings" },
    { id: 3, name: "Events" },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    select(e.target.value);
    setIsOpen(false)
  };

  const navList = (isMobile: boolean) => {
    return (
      <div className={isMobile ? 'flex justify-center items-center h-screen' : ''}>
        <ul className={`flex ${isMobile ? 'flex-col items-center justify-center' : 'space-x-4'} text-lg`}>
          {navElements.map((item) => (
            <li key={item.id}>
              <button
                className="hover:underline focus-within:underline"
                onClick={handleClick}
                value={item.name}
              >
                {item.name}
              </button>
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
    className={`flex items-center justify-center font-bold text-xl z-20 max-h-[200px] max-w-[200px]`}
    onClick={() => select("Home")}
  >
    <Logo fill="none" stroke="white" strokeWidth={0.5} />
  </button>

  {/* Navigation List (Left-Aligned in the Center Column) */}
  <div className="hidden grid-cols-subgrid col-span-3 md:block z-20">
    <nav className="p-4">{navList(false)}</nav>
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
</header>

    </>
  );
};

export default Header;
