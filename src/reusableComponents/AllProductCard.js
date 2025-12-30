import { useSelector } from "react-redux";
import "./AllProductCard.css";
export default function AllProductCard({ prop }) {
  // let allProductList = useSelector((state) => state.products);
  return (
    <div>
      <div className="productCard">
        <div className="image-cards">
          <img
            src={prop.image}
            // style={{ width: "200px", height: "200px" }}
            alt=""
          />
        </div>
        <div className="product-description">
          <p>{prop.title}</p>
          <p>Price: ${prop.price}</p>
          <p>Rating: {prop.rating}</p>
        </div>
      </div>
    </div>
  );
}
