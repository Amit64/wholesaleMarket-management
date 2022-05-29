import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import bannerAnim from "../../Assets/Lottie/bannerAnim.json";

const Banner = () => {
  const navigate = useNavigate();
  const options = {
    animationData: bannerAnim,
    loop: true,
    autoplay: true,
  };
  return (
    <section className="body-font bg-[#fffffe] ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#2b2c34]">
            Power Tools
            <br />{" "}
            <span className="hidden lg:inline-block">
              Electronics Tool manufacturer
            </span>
          </h1>
          <p className="mb-8 max-w-lg">
            we have the best quality autometic screwdrivers,circular saw,rotary
            hammers,drill machines,impact wrenches,chainsaw and many more...
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/products")}
              className="inline-flex text-white bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              shop now
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Lottie options={options} animationData={bannerAnim} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
{
  /* <Lottie animationData={bannerAnim} /> */
}
