import React from 'react'

export default function Navbar({logo}) {
  return (
    // Create a new navbar with teal-200 color
    <nav className = 'bg-teal-200'>
      {/* Add the components, using full width flex and flex row */}
    <div className = 'w-full flex flex-row justify-between py-5 items-center'>
      <div className = "text-2xl font-extrabold pl-5"> {logo} </div>
      {/* Add new flex row containing the buttons on the middle of the page */}
      <div className = 'flex flex-row justify-between gap-3.5 font-bold'>
      <div className="uppercase"><a href="./main.jsx">Home </a></div> 
      <div className="uppercase"><a href="#">Services </a></div> 
      <div className="uppercase"><a href="#">Portfolios </a></div> 
      <div className="uppercase"><a href="#">Testimonials </a></div> 
      </div>
      {/* Create a new button containing a color orange button with the text contact us leading to another page */}
      <button className = "bg-orange-200 text-xl font-bold px-4 py-2 rounded-full mr-4 "><a href="www.facebook.com">Contact Us!</a></button>
    </div>
  </nav>
  )
}
