import { useSelector } from "react-redux";
import BuyProductDetails from "../reusableComponents/BuyProductDetails";
import "./FeaturedProduct.css";

export default function FeaturedProduct() {
  const { womenProducts } = useSelector((state) => state.products);

  return (
    <div className="featured-product-container">
      <div className="featured-product-image">
        <img src={womenProducts[2] && womenProducts[2].image} alt="" />
      </div>
      <div className="featured-product-details">
        <BuyProductDetails props={womenProducts[2]} />
      </div>
    </div>
  );
}
