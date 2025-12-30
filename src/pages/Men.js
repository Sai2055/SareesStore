import {
  Catagories,
  clothesTypes,
  menImages,
  MenTraditionalAccessories,
} from "../constants/MensPage";
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
        {clothesTypes.map((item, index) => (
          <div key={index} className="div-item">
            {item}
          </div>
        ))}
      </div>
      <div>
        <h3 className="div-item">ACCESSORIES</h3>
        {MenTraditionalAccessories.map((item, index) => (
          <div key={index} className="div-item">
            {item}
          </div>
        ))}
      </div>
      <div>
        <h3 className="div-item">FEATURED PRODUCT</h3>
        <ProductCard prop={menImages} />
        <ProductCardPricing />
      </div>
    </div>
  );
}
