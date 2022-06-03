import React from 'react';

const Blogs = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2021</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">How will you improve the performance of a React Application?</h2>
          <p className="leading-relaxed">A React application may be made more efficient in a variety of ways. As an example, wherever possible, keep state of components local. Memorying React components to avoid unwanted re-renders is also a good strategy. In addition, dynamic imports in React allow for code-splitting (). React's virtualization of windows or lists. In React, photos may be loaded in a 'lazy' manner. Making Use of Structural Consistency. As many chunk files as you'd want</p>
        
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">14 Jun 2021</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">What are the different ways to manage a state in a React application?</h2>
          <p className="leading-relaxed">The four major forms of state you need to keep track of in your React projects are: Local state, Global state, Server state, and URL state. A component's local state refers to the data it keeps. Managing local state in React is often accomplished via the usage of the useState hook. Additionally, for both local and global states, useReducer is an option that may be implemented in any way. Under the hood, it is quite similar to useState, except that it takes a reducer instead of a starting state. You'd need local state for things like showing or hiding a modal component and keeping track of input data for forms that have been disabled. Data that is shared across different components is referred to as global state. When data has to be accessed and updated across many parts of our program, we need to use global state. Authenticated user state is a frequent example of a global state. In order to get or update data from an external server, you must handle a variety of states, including loading and error state.</p>
        
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">CATEGORY</span>
          <span className="text-sm text-gray-500">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">How does prototypical inheritance work?</h2>
          <p className="leading-relaxed">There is an unnoticed [[Prototype]] property in every object in addition to its methods and attributes. JavaScript's Prototypal Inheritance capability may be used to provide extra methods and properties to objects. Inheritance is a process through which an object may take on the traits and behaviors of another object. The [[Prototype]] of an object may typically be obtained and modified using the Object.getPrototypeOf and Object.setPrototypeOf methods. The __proto__ method is now often used in modern languages to set it.</p>
        
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Blogs;