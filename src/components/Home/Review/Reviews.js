import React, { useEffect, useRef, useState } from "react";
import Review from "../Review";
// Import Swiper React components



const Reviews = () => {
  const [reviews,setReviews]=useState([]);
  useEffect(()=>{
    const url="https://power-tools-30f6c.web.app/review"
    fetch(url)
    .then(res=>res.json())
    .then(data=>setReviews(reviews))
  },[reviews])
  return (
    <>
     <div className="carousel w-full p-4 space-x-4 bg-neutral rounded-box">
       {
         reviews.map(review=><Review
          key={review._id}
          review={review}
         ></Review>)
       }
  
 
</div>
    </>
  );
};

export default Reviews;
