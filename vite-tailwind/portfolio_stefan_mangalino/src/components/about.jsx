import React from 'react';

export default function about() {
  return (
    <div className="bg-gray-100 w-full h-fill pb-10">
    <section id="about" className="flex flex-col h-max w-full ml-10">
    <div className="text-3xl font-bold  text-center ">About Me</div>
    <div className="text-2xl font-medium text-center">Learn more about me</div>
    <div className="flex flex-row justify-between">
      <div className="flex flex-col w-1/2">
        <div className="mt-15">
          <p className="text-2xl font-light pl-7 pt-10">
           I am an individual who aims to learn more about programming and hardware, and also an individual that aims to pick up new skills
          </p>
          <p className=" text-2xl font-light pl-7 mt-10">
          I'm a fast learner, always eager to tackle new challenges in the evolving tech world. My tech journey began with curiosity and a thirst for knowledge. Since discovering my passion, I've been relentlessly pursuing growth and innovation.
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src="/src/images/image2.webp" className="rounded-full border-2 border-black" width={500}height={500}
        />
      </div>
    </div>
  </section>
  </div>

    )
}