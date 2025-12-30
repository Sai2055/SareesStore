import { useSelector } from "react-redux";
import "./AllProductImage.css";
export default function AllProductImage({ prop }) {
  // let allProductList = useSelector((state) => state.products);
  return (
    <div>
      <div className="productCard-Galary">
        <div className="galary-image-card">
          <img
            src={prop.image}
            // style={{ width: "200px", height: "200px" }}
            alt=""
            className="galary-image-card-img"
          />
        </div>
      </div>
    </div>
  );
}
