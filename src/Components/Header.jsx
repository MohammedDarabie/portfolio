import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
function Header() {
  const [showMenu, setshowMenu] = useState("md:hidden");
  const navigate = useNavigate();
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Contact",
      key: "/contact",
    },
    {
      title: "Hobbies",
      key: "/hobbies",
    },
  ];
  const path = window.location.pathname;
  return (
    <div className="text-white font-mont fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex justify-between items-center p-2 shadow-lg bg-theme ${
          showMenu === "" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between w-full items-center ">
          <h1
            onClick={() => navigate("/")}
            className="text-4xl font-semibold hover:text-red-800 cursor-pointer"
          >
            D R B
          </h1>
          <FaBars
            onClick={() => {
              if (showMenu === "md:hidden") {
                setshowMenu("");
              } else {
                setshowMenu("md:hidden");
              }
            }}
            className=" hidden lg:hidden xl:hidden 2xl:hidden md:flex"
          ></FaBars>
        </div>
        <div className="flex md:hidden ">
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none p-1 mx-6 ${
                  item.key === path
                    ? "bg-white text-theme px-1 rounded-md mx-5 "
                    : ""
                }`}
              >
                <Link to={item.key}>{item.title}</Link>
              </li>
            );
          })}
        </div>
        <div
          className={`hidden md:flex w-full justify-start items-start flex-col   ${showMenu} lg:hidden 2xl:hidden xl:hidden  `}
        >
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none px-5 ${
                  item.key === path
                    ? "bg-white text-theme px-1 rounded-md "
                    : ""
                }`}
              >
                <Link to={item.key}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
