import React from 'react'
import Layout from '../Components/Layout';
function Hobbies() {
  return <Layout>
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
</Layout>;
}

export default Hobbies