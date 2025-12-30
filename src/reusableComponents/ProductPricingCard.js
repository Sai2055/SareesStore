import { productCardPricing } from "../constants/MensPage";
import { productCardPricingDetails } from "../constants/WomenPage";
import { useCarosal } from "./Carosal";
import "./ProductPricingCard.css";
export default function ProductCardPricing() {
  let current = useCarosal(productCardPricingDetails);
  return (
    <div className="Product-Pricing">
      <div>{productCardPricingDetails[current].label}</div>
      <div>{productCardPricingDetails[current].price}</div>
    </div>
  );
}
