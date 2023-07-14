import React from "react";
import { FaLinkedin, FaMailBulk, FaGithub, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2A2A2A"
          fill-opacity="1"
          d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,202.7C672,213,768,235,864,234.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-theme w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="bg-theme p-10 font-mont  text-center">
            <p className="text-gray-50 pb-5">Designed and Developed By :</p>
            <div className="h-1 border-2 border-gray-500 border-dotted"></div>
            <div className="flex text-white w-full justify-between pt-5 pb-5">
              <a
                href="https://www.linkedin.com/in/mohammed-darabie-13603a232/"
                target="_blank"
              >
                <FaLinkedin size={50} />
              </a>
              <a href="https://github.com/MohammedDarabie" target="_blank">
                <FaGithub size={50} />
              </a>
              <a href="https://twitter.com/Mohammed_ihsan_" target="_blank">
                <FaTwitter size={50} />
              </a>
            </div>
            <div className="h-1 border-2 border-gray-500 border-dotted"></div>
            <p className="text-gray-50 my-2">Mohammed Darabie</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
