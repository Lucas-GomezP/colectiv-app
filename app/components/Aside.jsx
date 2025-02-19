"use client";

import { useEffect, useState } from "react";
import PublicTransportSection from "./PublicTransport/PublicTransportSection";
import useWindowSize from "../hooks/useWindowSize";
import { MenuCloseIcon, MenuOpenIcon } from "../ui/Icons";

export default function Aside() {
  const {windowSize} = useWindowSize();
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <button className="absolute top-4 right-4 md:hidden bg-black p-1 rouded-md z-50" onClick={() => setShowMenu(!showMenu)}>
        {/* {showMenu ? <MenuIcon /> : <MenuIcon />} */}
        {showMenu && windowSize.width < 768 ? <MenuCloseIcon /> : <MenuOpenIcon />}
      </button>
      <div className={`h-full flex flex-col absolute top-0 left-0 w-full md:w-1/4 md:fixed z-40 bg-black text-white ${showMenu || windowSize.width > 768 ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <h1 className="text-2xl text-center">Menu</h1>
        <PublicTransportSection />
      </div>
    </>
  );
}