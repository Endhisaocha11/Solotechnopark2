import Image from "next/image";
import React, { useState } from "react";
import LogoSTP from "@/images/Logo-Technopark-Remake-Solo-1.webp";
import ArrowDown from "@/images/down-arrow-svgrepo-com.svg";
import Link from "next/link";
import dataMenus from "@/data/dataMenus.json";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/AppContext";

function Navbar() {
  const menus = dataMenus;
  const router = useRouter();
  const { pathname } = router;
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [state, dispatch] = useAppContext();

  const onClickHamburger = (e) => {
    setIsOpen(!isOpen);
  };

  const setIndonesia = (e) => {
    dispatch({type: 'SET_LANG', payload: 'ID'});
  }
  
  const setEnglish = (e) => {
    dispatch({type: 'SET_LANG', payload: 'US'});
  }


  return (
    <nav
      onMouseLeave={() => {
        setDropdown1Open(false);
        setDropdown2Open(false);
        setDropdown3Open(false);
      }}
      className={`z-40 py-2 bg-gray-100 rounded-b-3xl text-gray-700 fixed w-full top-0`}
      style={{ zIndex: 999 }}
    >
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image src={LogoSTP} alt="Logo STP" width={130} />
        </Link>
        {/* Navigate */}
        <div
          className="fixed z-50 p-3 transition-all rounded-full cursor-pointer bg-slate-50 lg:hover:bg-slate-50 lg:hidden right-5"
          onClick={onClickHamburger}
        >
          <div className="flex flex-col items-center justify-between w-6 h-6">
            <span
              className={`bg-gray-900 h-1 w-full rounded-sm transition-all ${isOpen ? "rotate-45 translate-y-3" : null
                }`}
            ></span>
            <span
              className={`bg-gray-900 h-1 w-full rounded-sm transition-all ${isOpen ? "opacity-0" : null
                }`}
            ></span>
            <span
              className={`bg-gray-900 h-1 w-full rounded-sm transition-all ${isOpen ? " -rotate-45 -translate-y-2" : null
                }`}
            ></span>
          </div>
        </div>
        <div
          className={`text-md bg-gray-50 lg:bg-transparent fixed lg:relative left-0 right-0 top-0 bottom-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2 p-5 transition-all ${isOpen ? "translate-x-[0%]" : "translate-x-[100%] lg:translate-x-0"
            }
          }`}
        >
          {menus.map((data, i) => {
            if (data.menu_title === "Layanan") {
              return (
                <span key={i} className=" px-3 transition-all cursor-pointer">
                  <button
                    className="flex items-center justify-between hover:text-primary-100 gap-3 mx-auto"
                    onMouseMove={() => {
                      setDropdown1Open(true);
                      setDropdown2Open(false);
                      setDropdown3Open(false);
                    }}
                  >
                    <span> {state.isLang === 'ID' ? 'Layanan' : 'Services'} </span>
                    <Image
                      className="hidden lg:inline-block"
                      width={10}
                      height={12}
                      src={ArrowDown}
                      alt="layanan"
                    />
                  </button>
                  <div
                    className={`text-center lg:text-start lg:absolute lg:bg-white flex flex-col gap-5 lg:gap-0 lg:p-3 lg:rounded-md lg:shadow-md mt-4 ${
                      dropdown1Open ? "flex" : "hidden"
                    }`}
                    onMouseLeave={() => setDropdown1Open(false)}
                  >
                    {data.menu_subtitle &&
                      data.menu_subtitle.map((data, i) => (
                        <Link
                          key={i}
                          href={data.menu_url}
                          target={data.menu_target}
                          className={`px-3  transition-all py-2 rounded-lg ${
                            data.menu_url !== ""
                              ? "hover:bg-primary-100 hover:text-white "
                              : "hover:bg-gray-50 text-gray-300"
                          }`}
                        >
                          {state.isLang === 'ID' ? data.lang.ID : data.lang.US}
                        </Link>
                      ))}
                  </div>
                </span>
              );
            } else if (data.menu_title === "Infografis") {
              return (
                <span key={i} className=" px-3 transition-all cursor-pointer">
                  <button
                    className="flex items-center justify-between hover:text-primary-100 gap-3 mx-auto"
                    onMouseMove={() => {
                      setDropdown2Open(true);
                      setDropdown1Open(false);
                      setDropdown3Open(false);
                    }}
                  >
                    <span> {state.isLang === 'ID' ? 'Infografis' : 'Infographic'} </span>
                    <Image
                      className="hidden lg:inline-block"
                      width={10}
                      height={12}
                      src={ArrowDown}
                      alt="infografis"
                    />
                  </button>
                  <div
                    className={`text-center lg:text-start lg:absolute lg:bg-white flex flex-col gap-5 lg:gap-0 lg:p-3 lg:rounded-md lg:shadow-md mt-4 ${
                      dropdown2Open ? "flex" : "hidden"
                    }`}
                    onMouseLeave={() => setDropdown2Open(false)}
                  >
                    {data.menu_subtitle &&
                      data.menu_subtitle.map((data, i) => (
                        <Link
                          key={i}
                          href={data.menu_url}
                          target={data.menu_target}
                          className={`px-3  transition-all py-2 rounded-lg ${
                            data.menu_url !== ""
                              ? "hover:bg-primary-100 hover:text-white "
                              : "hover:bg-gray-50 text-gray-300"
                          }`}
                        >
                          {data.menu_title}
                        </Link>
                      ))}
                  </div>
                </span>
              );
            } else if (data.menu_title === "Fasilitas") {
              return (
                <span key={i} className=" px-3 transition-all cursor-pointer">
                  <button
                    className="flex items-center justify-between hover:text-primary-100 gap-3 mx-auto"
                    onMouseMove={() => {
                      setDropdown3Open(true);
                      setDropdown1Open(false);
                      setDropdown2Open(false);
                    }}
                  >
                    <span> {state.isLang === 'ID' ? 'Fasilitas' : 'Facility'} </span>
                    <Image
                      className="hidden lg:inline-block"
                      width={10}
                      height={12}
                      src={ArrowDown}
                      alt="fasilitas"
                    />
                  </button>
                  <div
                    className={`text-center lg:text-start lg:absolute lg:bg-white flex flex-col gap-5 lg:gap-0 lg:p-3 lg:rounded-md lg:shadow-md mt-4 ${
                      dropdown3Open ? "flex" : "hidden"
                    }`}
                    onMouseLeave={() => setDropdown3Open(false)}
                  >
                    {data.menu_subtitle &&
                      data.menu_subtitle.map((data, i) => (
                        <Link
                          key={i}
                          href={data.menu_url}
                          target={data.menu_target}
                          className={`px-3  transition-all py-2 rounded-lg ${
                            data.menu_url !== ""
                              ? "hover:bg-primary-100 hover:text-white "
                              : "hover:bg-gray-50 text-gray-300"
                          }`}
                        >
                          {state.isLang === 'ID' ? data.lang.ID : data.lang.US}
                        </Link>
                      ))}
                  </div>
                </span>
              );
            } else {
              return (
                <Link
                  key={i}
                  href={data.menu_url}
                  target={data.menu_target}
                  className={`px-3  transition-all hover:text-primary-100 ${
                    data.menu_url === pathname
                      ? "font-medium text-primary-100"
                      : ""
                  }`}
                >
                  {state.isLang === 'ID' ? data.lang.ID : data.lang.US}
                </Link>
              );
            }
          })}
          <div class="dropdown">
            <button class="dropbtn"></button>
            <div class="dropdown-content rounded-md">
              <button className="w-full text-start rounded-md" onClick={setIndonesia}>Indonesia</button>
              <button className="w-full text-start rounded-md" onClick={setEnglish}>English</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;