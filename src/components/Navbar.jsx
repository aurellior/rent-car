import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../img/logo.png";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: "Home", text: "Home" },
    { id: "Projects", text: "Projects" },
    { id: "About", text: "About" },
  ];

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: 7500,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white sticky flex justify-between items-center h-[300px] md:h-[124px] w-full mx-auto md:px-[80px] px-[40px] border-[#C3D4E966] border-2 text-white z-20">
      {/* Logo */}
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[64px]">
        <Link to="/">
          <h1 className="text-[#3563E9] text-[32px] font-bold">MORENT</h1>
        </Link>

        {/* Search */}
        <div class="w-[300px] md:w-[350px] lg:w-[492px] mx-auto">
          <div class="relative flex gap-[20px] items-center w-full px-[20px] h-12 border-[1px] border-[#C3D4E966] border-opacity-40 rounded-3xl  bg-white overflow-hidden">
            <div class="grid place-items-center h-full w-12 text-[#596780]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer h-full w-full outline-none text-[14px] text-gray-700 pr-2 font-medium"
              type="text"
              id="search"
              placeholder="Search something here"
            />
            <div>
              <IconContext.Provider value={{ color: "#596780", size: "24px" }}>
                <div>
                  <LuSettings2 />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-[20px]">
        <button className="flex items-center justify-center h-[50px] w-[50px] rounded-full border-[#C3D4E966] border-[1px]">
          <IconContext.Provider value={{ color: "#596780", size: "24px" }}>
            <div>
              <FaHeart />
            </div>
          </IconContext.Provider>
        </button>
        <button className="flex items-center justify-center h-[50px] w-[50px] rounded-full border-[#C3D4E966] border-[1px]">
          <IconContext.Provider value={{ color: "#596780", size: "24px" }}>
            <div>
              <IoNotifications />
            </div>
          </IconContext.Provider>
        </button>
        <button className="flex items-center justify-center h-[50px] w-[50px] rounded-full border-[#C3D4E966] border-[1px]">
          <IconContext.Provider value={{ color: "#596780", size: "24px" }}>
            <div>
              <IoMdSettings />
            </div>
          </IconContext.Provider>
        </button>
        <button className="flex items-center justify-center h-[50px] w-[50px] rounded-full  border-[#C3D4E966] border-[1px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/f1f5/6cb5/7c6c5d88e94501a481b5f732536c2851?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8qgOX44eueluIYxFpPYwmktdf9nJUjdp2kfkgS2rjllpSIA16hKnL2owGfDYohm63pZBO7zjjrCCnkpouOECDNLGbFybkj72VE~kyWp0oOyPSnV1ezx3XKwX3ImeoXQKzAIhkROSNpl--z5z2VnbDGRMT6JK0-7w0EV7juqF9LoBp4s-jlftQ9dcM6ARclrDSO5PF2zn3Gr2GStkKnOKktfADZOYXCKzEnczhRDvlvj19z4fN7AHUHJU73SDkBqbm2DcsBNMa5KlmVAlWmKc94LUAigQFXdJVnKZG7bICQAszZqKiqVa1uInAmwK3BGCxQ6mhaff195E7rTg1eYKw__"
            className="rounded-full "
          />
        </button>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full  bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <div className="w-[60px]">
          <img src={Logo} alt="" />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              handleClickScroll(item.id);
              handleNav();
            }}
            className="p-4  rounded-xl  duration-300 hover:text-[#ED4C51] cursor-pointer "
          >
            {item.text}
          </li>
        ))}
        <li className="p-4  rounded-xl  duration-300 hover:text-[#ED4C51] cursor-pointer ">
          <li
            onClick={() => {
              scrollToBottom();
              handleNav();
            }}
          >
            Contact Me
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
