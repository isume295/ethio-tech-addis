/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import BiMenu from 'react-icons';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(!showContent);
  };

  const links = [
    { path: '/', label: 'Home' },
    {
      path: '/company',
      label: 'Company',
      dropdownLinks: [
        { path: '/about', label: 'About Us' },
        { path: '/team', label: 'Team' },
        { path: '/service', label: 'Services' },
        { path: '/training', label: 'Traninigs' },
        { path: '/event', label: 'Events' },
        { path: '/career', label: 'Career' },
      ],
    },
    { path: '/project', label: 'Project' },
    { path: '/partners', label: 'Partners' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="sticky top-0 z-10">
      <nav className="flex ">
        <div className="md:flex md-flex-col w-full h-16 gap-8 text-sm items-center px-8 py-4 font-poppins font-medium text-white bg-mainColor">
          <div className="md:flex md-flex-col gap-8 mt-28 md:mt-0">
            {links.map((link) => (
              <div key={link.label} onMouseEnter={link.label === 'Company' ? toggleDropdown : null} onMouseLeave={link.label === 'Company' ? closeDropdown : null} className="">
                <div className={`transition-all duration-500 transform md:flex ${showContent ? 'flex flex-col bg-mainColor  justify-center items-center gap-4 translate-y-0' : 'hidden'}`}>
                  <NavLink className="hover:text-secondColor duration-300 ease-in-out text-black md:text-white md:py-4" to={link.path}>
                    {link.label}
                  </NavLink>
                  {link.label === 'Company' && isDropdownOpen && (
                  <div className="absolute flex flex-col font-medium text-sm gap-2 bg-white text-gray-400 w-48 px-3 py-2 shadow-md mt-10">
                    {link.dropdownLinks.map((dropdownLink) => (
                      <NavLink className="hover:text-secondColor duration-300 ease-in-out" key={dropdownLink.label} to={dropdownLink.path}>
                        {dropdownLink.label}
                      </NavLink>
                    ))}
                  </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:hidden absolute text-white right-6 top-4 justify-end">
          <button type="button" onClick={handleButtonClick}>
            menu
          </button>
        </div>
      </nav>
    </div>
  );
}
