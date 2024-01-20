"use client";
import Button from "@/Components/Ui/Button";
import WidthContainer from "@/Components/WidthContainer";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function HeaderComponent() {
  const navList = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      url: "/",
    },
    {
      name: "Result",
      url: "/",
    },
    {
      name: "About Us",
      url: "/",
    },
    {
      name: "Blog",
      url: "/",
    },
  ];

  const [navActive, setNavActive] = useState(false);
  const [currentLoc, setCurrentLoc] = useState("");
  const [scrollY, setScrollY] = useState(0);

  const pathName = usePathname();

  useEffect(() => {
    setCurrentLoc(pathName);
    console.log(pathName);
    return () => {};
  }, []);

  const cl = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", cl);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", cl);
    };
  }, []);

  return (
    <div
      className={clsx(
        "sticky left-0 top-0 z-30 bg-white bg-opacity-15 py-1 backdrop-blur-lg transition-all duration-200 ease-in-out",
        +scrollY > 0 && "shadow",
      )}
    >
      <WidthContainer className="">
        <div className="relative flex h-fit items-center justify-between gap-2">
          <p className="text-2xl font-semibold">Mlab</p>
          <ul className="hidden gap-4 first:text-primary md:flex">
            {navList.map((nav) => (
              <li key={nav.name}>
                <a
                  href={nav.url}
                  className={clsx(
                    "font-medium transition duration-200 hover:text-primary",
                    nav.name === "Home" && "text-primary",
                  )}
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
          <Button className="ml-auto md:ml-0">Contact Us</Button>
          <Button
            variant="ghost"
            onClick={() => setNavActive((prev) => !prev)}
            className="md:hidden"
          >
            <FaBars />
          </Button>
          <nav
            className={clsx(
              "nav_bar fixed top-0 z-30 h-screen bg-black bg-opacity-55 transition-colors duration-300",
              navActive
                ? "left-0 w-screen "
                : "-left-[120vw] bg-transparent bg-opacity-0",
            )}
          >
            <div
              className={clsx(
                "absolute flex h-full w-[80%] flex-col overflow-hidden bg-white py-1 transition-all duration-300",
                navActive ? "left-0 delay-75" : "-left-[100vw]",
              )}
            >
              <div className="flex items-center justify-between border-b border-black border-opacity-45 px-3 pb-1">
                <p className="text-xl font-semibold">Navigation</p>
                <Button
                  variant="ghost"
                  onClick={() => setNavActive((prev) => !prev)}
                >
                  <FaXmark />
                </Button>
              </div>
              {navList.map((nav) => (
                <a
                  key={nav.name}
                  href={nav.url}
                  className={clsx(
                    "w-full px-3 py-1 transition duration-200 hover:bg-white_lite hover:text-primary md:hover:bg-transparent",
                    currentLoc === nav.url && "text-primary",
                  )}
                >
                  {nav.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </WidthContainer>
    </div>
  );
}

export default HeaderComponent;
