import { useState } from "react";

export default function BuyProductDetails({ props }) {
  const [selectedSize, setSelectedSize] = useState(null);
  function handleSelectSize(indexToSelect) {
    setSelectedSize(indexToSelect);
  }
  return (
    <div className="featured-product-inner-container">
      <div className="featured-product-buyDetails">
        {props && `${props.title}`}
      </div>
      <div className="featured-product-buyRating">
        {props && `Rating: ${props.rating}`}
      </div>
      <div className="featured-product-buyPrice">
        {props && `Price: ${props.price}`}
      </div>
      <div className="featured-product-buyCategoryName">
        {props && `caterogy: ${props.categoryName}`}
      </div>
      <div className="featured-product-buySize">
        {props && (
          <>
            <label htmlFor="">Size: </label>
            {props.sizes.map((size, index) => (
              <div
                key={index}
                className={`featured-product-sizeElement ${
                  selectedSize === index ? "selected-size" : ""
                }`}
                onClick={() => handleSelectSize(index)}
              >
                {size}
              </div>
            ))}
          </>
        )}
      </div>
      <div className="payment-btns">
        <div className="addToCart">
          <button className="buy-btn">ADD TO BAG</button>
        </div>
        <div className="buy-now">
          <button className="buy-btn-1">BUY NOW</button>
        </div>
      </div>
      <div className="featured-product-description">
        <h3>Description</h3>
        <ul>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          </li>
        </ul>
      </div>
    </div>
  );
}
