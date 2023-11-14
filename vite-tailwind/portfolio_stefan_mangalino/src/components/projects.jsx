import React from 'react';

export default function Projects() {
  return (
    <div className="bg-gray-100 w-full h-fill">
      <div className="projects flex flex-col justify-center items-center py-4 pb-20">
        <div className="w-full max-w-3xl flex flex-row justify-center">
          <div className="w-full flex flex-col items-start">
            <div className="font-bold text-3xl text-justify">Projects:</div>
            <div className="items-center mt-4">
              <div className="text-xl mb-2">Database using Java</div>
              <div className="text-xl mb-2">Portfolio using HTML/CSS/JS</div>
              <div className="text-xl mb-2">Experimental Portfolio using Vite and Tailwind CSS</div>
              <div className="text-xl mb-2">Login Page incorporating HTML/CSS/JS with PHP</div>
            </div>
          </div>
          {/* Add image on the right side */}
          <div className="hero2 ml-20">
            <img src="/src/images/question.png" className="h-auto w-auto" alt="Project Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
