import React from "react";
import Layout from "../Components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Home() {
  return (
    <Layout>
      <div>
        {/* Intro Section */}
        <div className=" min-h-screen bg-theme ">
          <div
            className="grid md:grid-cols-1 grid-cols-2 h-screen 
          items-center border-4 border-white transform rotate-[10deg] md:rotate-0 md:border-0
           bg-theme mx-10 "
          >
            <div className="" data-aos="fade-down-right">
              <img className="" src="./img/developer.png" alt="home_pic"></img>
            </div>
            <div
              data-aos="fade-right"
              className="font-semibold text-white md:px-5"
            >
              <h1 className="text-7xl md:text-4xl md:-mt-52">
                Hii , I'm <b className="text-yellow-500">Mohammed</b>
              </h1>
              <h1 className="text-4xl md:text-2xl">
                FullStack <b className="text-red-500">Developer</b>
              </h1>
            </div>
          </div>
        </div>
        {/* Technologies Section */}
        <div
          className="mt-20"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="5500"
        >
          <h1 className="text-6xl md:text-4xl text-blue-800 font-bold text-center my-10">
            <i>Technologies I use</i>
          </h1>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 grid-cols-4 ">
            <img
              className="h-[250px] m-auto mt-20 animate-bounce"
              src="./img/react.png"
              alt="react_logo"
            />
            <img
              className="h-[250px] m-auto mt-20 animate-bounce"
              src="./img/nodejs.gif"
              alt="nodejs_logo"
            />
            <img
              className="h-[250px] m-auto mt-20 animate-bounce"
              src="./img/java.gif"
              alt="java_logo"
            />
            <img
              className="h-[250px] m-auto mt-20 animate-bounce"
              src="./img/js.png"
              alt="js_logo"
            ></img>
            <img
              className="h-[250px] m-auto mt-20 animate-bounce"
              src="./img/html.png"
              alt="html_logo"
            ></img>
            <img
              className="h-[250px] m-auto mt-20 animate-bounce"
              src="./img/mysql.gif"
              alt="mysql_logo"
            ></img>
            <img
              className="h-[250px] m-auto mt-20 animate-bounce"
              src="./img/mongodb.gif"
              alt="mongoDB"
            ></img>
            <img
              className="h-[250px] m-auto mt-20 animate-bounce"
              src="./img/css3.png"
              alt="css_logo"
            ></img>
          </div>
        </div>
        {/* JavaScript Buff */}
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="5500"
        >
          <div className="text-center h-52 bg-theme">
            <h1 className="text-6xl md:text-4xl text-white font-bold text-center p-10 ">
              <i> You're Right, Iam a JavaScript Buff </i>
            </h1>
          </div>
          {/*
           */}
          {/*
           */}
          <div
            className="md:mx-5 mx-32 shadow-2xl bg-gray-50
           -mt-10 md:-mt-10 p-10 md:p-5 rounded-lg 
           hover:bg-gray-700
           hover:text-white"
          >
            <div className="h-96">
              <img
                className="h-96 m-auto"
                src="./img/jsBuff.gif"
                alt="buff"
              ></img>
            </div>
            <p className="text-2xl md:text-xl text-center my-5 font-semibold  ">
              JavaScript is one of the most top-ranked programming languages
              because of its ubiquitous use on all platforms and mass adoption.
              Main use Cases : Web Development
            </p>
          </div>
        </div>
        {/*  Dev Stack */}
        <div
          className="my-20"
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          <div className="text-center h-52 bg-theme">
            <h1 className="text-6xl md:text-4xl text-white font-bold text-center p-10">
              <i> My Dev Stack </i>
            </h1>
          </div>
          {/*
           */}
          {/*
           */}
          <div
            className="md:mx-5 mx-32 shadow-2xl bg-gray-50
           -mt-10 md:-mt-10 p-10 md:p-5 rounded-lg
           hover:bg-gray-700
           hover:text-white"
          >
            <div className="h-96">
              <img
                className="h-96 m-auto"
                src="./img/male-web-deveoper.gif"
                alt="buff"
              ></img>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div className="text-left">
                <h1 className="font-bold text-xl">Front-End</h1>
                <hr></hr>
                <p className="font-semibold mt-2">HTML/CSS</p>
                <p className="font-semibold mt-2">React</p>
                <p className="font-semibold mt-2">JavaScript</p>
                <p className="font-semibold mt-2">Redux</p>
              </div>
              <div className="text-center">
                <h1 className="font-bold text-xl">UI/UX</h1>
                <hr></hr>
                <p className="font-semibold mt-2">BootStrap</p>
                <p className="font-semibold mt-2">Tailwind</p>
                <p className="font-semibold mt-2">Material UI</p>
                <p className="font-semibold mt-2">IconScout</p>
              </div>
              <div className="text-right">
                <h1 className="font-bold text-xl">Back-End/DB</h1>
                <hr></hr>
                <p className="font-semibold mt-2">Nest JS</p>
                <p className="font-semibold mt-2">Express JS</p>
                <p className="font-semibold mt-2">Spring</p>
                <p className="font-semibold mt-2">MYSQL</p>
                <p className="font-semibold mt-2">Mongo DB</p>
              </div>
            </div>
          </div>
        </div>
        {/* Dev Info */}
        <div>
          <h1 className="font-bold text-4xl text-blue-800 text-center">
            Who is Mohammed ?
          </h1>
          <div className="h-screen relative text-black">
            <div className="h-full">
              <img src="./img/blop.png" alt="Blop" className="m-auto"></img>
            </div>
            <div className="bg-black p-5 rounded-lg text-white absolute top-32 right-[30%] sm:right-[3%] sm:top-16 md:right-[20%] flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-left ">
                Hello , أهلا و سهلا
              </h1>
              <hr></hr>
              <pre className="text-xl my-5 font-mont ">
                {JSON.stringify(
                  {
                    name: "Mohammed Darabie",
                    age: 24,
                    gender: "Male",
                    Country: "Jordan",
                  },
                  null,
                  2
                )}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
