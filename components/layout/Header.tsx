import React from "react";
import Image from "next/image";
import Button from "../common/Button";

import {ACCOMMODATIONTYPES} from "../../constants";

const Header = () => {
  return (
    <header>
        {/* top bar */}
        <div className="bg-[#34967c] flex justify-center items-center">
            <div className="flex items-center justify-center gap-2 sm:gap-1 p-2">
                <Image src="/assets/Case Minimalistic.svg" alt="Case Minimalistic" width={25} height={25} />
                <p className="text-sm text-white sm:text-left px-2">
                    Overseas trip? Get the latest information on travel guides
                </p>
                <Button
                    text="More Info"
                    className="bg-black text-white m-auto flex justify-center items-center cursor-pointer w-36 h-10 rounded-full px-2 py-4 sm:w-24 sm:h-8 sm:text-xs sm:px-1 sm:py-2"
                />
            </div>
        </div>

        {/* search bar mobile */}
        <div className="flex items-center justify-between p-4 shadow-md gap-2 md:hidden">
            <div className="flex items-center justify-between bg-white rounded-full border border-gray-300 px-2.5 py-2 w-full ">
                <div>
                    <h2 className="pl-3">Where to</h2>
                    <div className="flex items-center justify-around">
                        <input
                            type="text"
                            placeholder="Location"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-20 outline-none border-0"
                        />
                        <input
                            type="text"
                            placeholder="Data"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-20 outline-none border-0"
                        />
                        <input
                            type="text"
                            placeholder="Add Guests"
                            className="px-1 py-2 rounded-full border-gray-300 text-sm w-20 outline-none border-0"
                        />
                    </div>
                </div>
            <div className="bg-[#FFA800] rounded-full w-14 h-14 flex items-center justify-center cursor-pointer">
                <Image src="/assets/Magnifer.png" alt="Case Minimalistic" width={25} height={25} />
            </div>
            </div>
            <div className="rounded-full w-17 h-17 flex items-center justify-center cursor-pointer ">
                <Image src="/assets/profile 2.svg" alt="Case Minimalistic" width={100} height={100} className="rounded-full bg-[#34967C]" />
            </div>
        </div>
        
        
         {/* Search Bar taplet */}
        <div className="md:flex items-center justify-between p-5 shadow-md gap-5 hidden xl-hidden 2xl:hidden">
            <Image src="/assets/logo.png" alt="logo" width={80} height={80} className="cursor-pointer"/>
            <div className="flex items-center justify-between bg-white rounded-full px-2.5 py-2 w-full shadow-md">
                    <div className="flex items-center justify-around w-full">
                       <div className="flex flex-col w-[40%] pl-5">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="Search for destination"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-5">
                        <label htmlFor="Check in">Check in</label>
                        <input
                            type="text"
                            id="Check in"
                            placeholder="Add date"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-5">
                        <label htmlFor="Check out">Check out</label>
                        <input
                            type="text"
                            id="Check out"
                            placeholder="Add date"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-5">
                        <label htmlFor="People">People</label>
                        <input
                            type="text"
                            id="People"
                            placeholder="Add guest"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                    </div>
                
            <div className="bg-[#FFA800] rounded-full w-14 h-14 flex items-center justify-center cursor-pointer">
                <Image src="/assets/Magnifer.png" alt="Case Minimalistic" width={25} height={25} />
            </div>
            </div>
            
                <div className="w-14 h-14 flex items-center justify-center shrink-0">
                  <Image src="/assets/profile 2.svg" alt="Case Minimalistic" width={20} height={20} className="rounded-full bg-[#34967C] cursor-pointer w-full" />
                </div>
            
        </div>

         {/* Search Bar desktop */}
        <div className="2xl:flex items-center justify-between p-5 shadow-md hidden md:hidden lg:hidden ">
            <Image src="/assets/logo.png" alt="logo" width={80} height={80} className="cursor-pointer"/>
            <div className="flex items-center justify-between bg-white rounded-full px-2.5 py-2 shadow-md">
                    <div className="flex items-center justify-around w-full">
                       <div className="flex flex-col w-[40%] pl-5">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="Search for destination"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-5">
                        <label htmlFor="Check in">Check in</label>
                        <input
                            type="text"
                            id="Check in"
                            placeholder="Add date"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-5">
                        <label htmlFor="Check out">Check out</label>
                        <input
                            type="text"
                            id="Check out"
                            placeholder="Add date"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-5">
                        <label htmlFor="People">People</label>
                        <input
                            type="text"
                            id="People"
                            placeholder="Add guest"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                    </div>
                
            <div className="bg-[#FFA800] rounded-full w-14 h-14 flex items-center justify-center cursor-pointer shrink-0">
                <Image src="/assets/Magnifer.png" alt="Magnifer" width={25} height={25} />
            </div>
            </div>
            
  {/* Auth Buttons */}
                <div className=" flex items-center justify-center shrink-0">
        
          <button className="mr-3 py-2 px-4 rounded-full border-none bg-[#34967C] text-white cursor-pointer">
            Sign In
          </button>
          <button className="py-2 px-4 rounded-full  bg-white text-black cursor-pointer border border-gray-300 ">
            Sign Up
          </button>
        </div>
            
        </div>


        {/* Accommodation Types */}
      <nav className="my-4 border-t border-gray-100 pt-2 pl-5 pr-2 w-full">
        <ul className="flex gap-8 list-none justify-between items-center overflow-auto bar">
          {ACCOMMODATIONTYPES.map((type) => (
            <li
              key={type.type}
              className="cursor-pointer font-medium text-gray-600 hover:text-blue-600 transition flex items-center justify-center flex-col text-center"
            >
              <Image src={type.icon} alt={type.type} width={25} height={25} />
              <span className="text-[12px] whitespace-nowrap">{type.type}</span>
            </li>
          ))}
        </ul>
      </nav>




        
        
    </header>
  );
};

export default Header;