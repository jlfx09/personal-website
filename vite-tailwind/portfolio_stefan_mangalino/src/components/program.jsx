import React from 'react';

export default function program() {
  return (
<div className="bg-gray-200 w-full h-max">
        <div className="flex flex-col justify-center items-center py-11">
            <p className = "text-2xl font-bold"> Languages</p>
          <div className="w-full max-w-3xl flex flex-row justify-center"> 
            <div className="w-full flex flex-col items-start">
              <div className="font-semibold text-2xl flex flex-row items-start mr-8">
             
                <ul>
                  <li>Java</li>
                  <li>C++/C</li>
                  <li>React/Node.js</li>
                  <li>HTML/CSS/JS</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>

            <div className="ml-10 flex flex-row items-center">
              {/* Add images for each language */}
              <img src="/src/images/java.png" alt="Java" className="w-1/6 h-auto" />
              <img src="/src/images/c++.png" alt="C++/C" className="w-1/6 h-auto" />
              <img src="/src/images/react.png" alt="React/Node.js" className="w-1/6 h-auto" />

              <img src="/src/images/html5.png" alt="HTML" className="w-1/6 h-auto" />
              <img src="/src/images/css.png" alt="CSS" className="w-1/6 h-auto" />
              <img src="/src/images/python.png" alt="Python" className="w-1/6 h-auto" />
            </div>
          </div>
        </div>
      </div>
         )
        }