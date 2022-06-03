import React from "react";

const Review = ({review}) => {
  return (
    <>
      <div className="carousel-item">
          <p>{review?.review}</p>
      </div>
    </>
  );
};

export default Review;
