import React from 'react';
import Lottie from "lottie-react";
import NotFound from '../../../Assets/Lottie/NotFound.json'

const PageNotFound = () => {
    const options = {
        animationData: NotFound,
        loop: true,
        autoplay: true,
      };
    return (
        <div className=' pb-14'>
            <div className=' w-2/4 px-5 py-24 mx-auto '> 
            <h1 className='text-5xl text-center'>Page Not Found</h1>             
            <Lottie options={options} animationData={NotFound} />
            </div>
        </div>
    );
};

export default PageNotFound;