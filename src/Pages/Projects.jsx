import React from "react";
import Layout from "../Components/Layout";
import projectData from "./../resources/projects";
function Projects() {
  return (
    <Layout>
      <div className="bg-theme">
        <div className="h-screen ">
          <div className="h-3/4">
            <img
              className="m-auto md:-mb-32"
              alt="projects"
              src="./img/projects.gif"
            />
          </div>
          <p
            className="text-xl font-semibold text-center md:mt-0 mt-32 
           bg-gray-200 rounded-lg p-5 drop-shadow-lg"
          >
            “Good ideas are not adopted automatically. They must be driven into
            practice with courageous patience.” ~ Hyman Rickover
          </p>
        </div>
      </div>
      <div
        className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 
      mx-20 md:mx-5 "
      >
        {projectData.map((project) => {
          return (
            <div>
              <div
                className="relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl
               border-gray-400"
              >
                <img src={project.image} alt="src" className="h-52 m-auto " />
                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-70">
                  <h1 className="text-4xl font-semibold text-white">
                    {project.title}
                  </h1>
                  <a
                    href={project.link}
                    className="border-2 rounded-lg border-white py-2 px-5 text-white bg-green-500 mt-5"
                    target="_blank"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Projects;
