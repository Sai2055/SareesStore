import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AllProductCard from "./AllProductCard";
import "./ProductCardCarosal.css";

export default function ProductCardCarosal({ prop }) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleProducts = prop.slice(startIndex, startIndex + 5);
  const handleNext = () => {
    if (startIndex < prop.length - 5) {
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="ProductCardCarosal">
      <div className="ProductCard-carosal-icons" onClick={handlePrev}>
        <FontAwesomeIcon icon={faAngleLeft} className="icon-font" />
      </div>
      <div className="ProductCard-details">
        {visibleProducts.map((p) => (
          <AllProductCard key={p.id} prop={p} />
        ))}
      </div>
      <div className="ProductCard-carosal-icons1" onClick={handleNext}>
        <FontAwesomeIcon icon={faAngleRight} className="icon-font" />
      </div>
    </div>
  );
}
