import { useState } from "react";
import "../Star-Rating/styles.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    console.log(getCurrentIndex);
  }

  return (
    <div className="container">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            onMouseMove={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
            size={40}
          />
        );
      })}
    </div>
  );
}
