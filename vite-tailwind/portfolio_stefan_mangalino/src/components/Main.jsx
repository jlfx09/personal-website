import React from 'react';

export default function Main() {
  return (
    <div>
      <div className="hero-1 flex flex-col justify-center items-center py-20">
        <div className="w-full max-w-3xl flex flex-row justify-center">
          <div className="w-full flex flex-col items-start">
            {/* Create new Divisions for Name, Skills and Buttons */}
            <div className="font-bold text-3xl text-justify">
              Hi! My name is Stefan Griyego Mangalino, a Student from Holy Angel University aiming to become a Game Developer.
            </div>
            <div className="flex flex-row gap-4 items-center">
              {/* Create new division for skillsets */}
              <div className="font-extrabold text-2xl uppercase py-5">Skills: </div>
              <div className="text-xl">Programming</div>
              <div className="text-xl">Debugging</div>
              <div className="text-xl">Developer</div>
            </div>
            {/* Create Division for Buttons */}
            <div className="flex flex-row gap-4 items-center py-5">
              <button className="border-2 px-4 py-2 border-black rounded-full">Learn More</button>
              <button className="border-2 border-black bg-yellow-500 rounded-full px-4 py-2">Contact Us</button>
            </div>
          </div>
          {/* Create new division for hero 2 component */}
          <div className="hero2 ml-20">
            <img src="/src/images/image1.jpg" className="rounded-full border-black border-2 h-auto w-auto" alt="Hero Image" />
          </div>
        </div>
      </div>

    </div>
  );
}
