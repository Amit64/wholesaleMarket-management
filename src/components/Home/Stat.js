import React from "react";

const Stat = () => {
  return (
    <section className="text-gray-600 body-font bg-secondary rounded">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p className="leading-relaxed">Customers</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">10M+</h2>
        <p className="leading-relaxed">Annual Revenue</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2k</h2>
        <p className="leading-relaxed">Reviews</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">10</h2>
        <p className="leading-relaxed">Products</p>
      </div>
    </div>
  </div>
</section>
  );
};

export default Stat;
