import { Catagories } from "../constants/MensPage";
import {
  WomenClothesTypes,
  womenProductCard,
  WomenTraditionalAccessories,
} from "../constants/WomenPage";
import "../pages/Mens.css";
import ProductCard from "../reusableComponents/Pr0ductCard";
import ProductCardPricing from "../reusableComponents/ProductPricingCard";
import Home from "./Home";
export default function Men() {
  return (
    <div className="MensPage-container">
      <div>
        <h3 className="div-item">CATERGORIES</h3>
        {Catagories.map((item, index) => (
          <h3 key={index} className="div-item">
            {item}
          </h3>
        ))}
      </div>
      <div>
        <h3 className="div-item">CLOTHES</h3>
        {WomenClothesTypes.map((item, index) => (
          <div key={index} className="div-item">
            {item}
          </div>
        ))}
      </div>
      <div>
        <h3 className="div-item">ACCESSORIES</h3>
        {WomenTraditionalAccessories.map((item, index) => (
          <div key={index} className="div-item">
            {item}
          </div>
        ))}
      </div>
      <div>
        <h3 className="div-item">FEATURED PRODUCT</h3>
        <ProductCard prop={womenProductCard} />
        <ProductCardPricing />
      </div>
    </div>
  );
}
