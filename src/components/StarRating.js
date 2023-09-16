import React, { useState } from "react";
import "./starRating.css";

const StarRating = ({ starLimit }) => {
  const [rating, setRating] = useState(starLimit);
  const starsArray = Array.from({ length: starLimit }, (_, index) => index + 1);

  const handleStartClick = (star) => {
    setRating(star);
  };

  const starRowStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center" // Make stars appear in a row
  };

  return (
    <>
      <div style={starRowStyles} className="star-rating">
        {starsArray.map((star, index) => (
          <span
            key={index}
            onClick={() => handleStartClick(star)}
            className="star"
          >
            {star <= rating ? (
              <span
                className={`${
                  rating <= 2 ? "red" : rating === 3 ? "yellow" : "green"
                }`}
              >
                {" "}
                {"★"}
              </span>
            ) : (
              <span>{"☆"}</span>
            )}
          </span>
        ))}
        <p className="rate">{rating} star</p>
      </div>
      {/* emojis basis on the star */}

      <div className="emoji" role="img">
        {rating <= 2 ? "😌😌😌" : rating === 3 ? "😊😊😊" : "😆😆😆"}
      </div>
      <div>{rating === 5 && <b>Thank You!</b>}</div>
    </>
  );
};

export default StarRating;
