import React from 'react'

function Intro1() {
  return (
   <div className='blog-post-intro bg-gray-100 p-6 rounded-lg shadow-md mb-8'>
    <h2>I've become React Developer</h2>
    <div>
        <p>React is a JavaScript library for building user interfaces.</p>
        <p>It allows developers to create large web applications that can change data without reloading the page.</p>
        <p>Its key feature is the ability to build reusable UI components.</p>
        <p>React uses a virtual DOM to optimize rendering performance.</p>
        <p>It is maintained by Facebook and a community of individual developers and companies.</p>
    </div>
   </div>
  )
}

export default Intro1;