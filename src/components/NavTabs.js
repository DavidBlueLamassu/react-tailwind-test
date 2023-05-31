import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi'



function NavTabs() {

  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="sticky top-0 z-20 bg-white">
      <HiMenu onClick={() => setShowNav(!showNav)}
      className="md:hidden block w-10 h-10 p-2 cursor-pointer"/>
      <ul className={(showNav ? "left-0" : "-left-full") + " fixed bottom-0 top-12 bg-gray-500 w-6/12 h-48 text-white space-y-5 md:space-y-0 p-2 md:static md:flex md:px-2 md:pb-4 md:pt-2 md:bg-white md:h-12 md:text-black bg-opacity-90"}>
        <li className="px-2 hover:text-green-400">
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className="px-2 hover:text-green-400">
          <NavLink to="about">
            About
          </NavLink>
        </li>
        <li className="px-2 hover:text-green-400">
          <NavLink to="blog">
            Blog
          </NavLink>
        </li>
        <li className="px-2 hover:text-green-400">
          <NavLink to="contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
