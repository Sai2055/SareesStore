import { menImages } from "../constants/MensPage";
import { useCarosal } from "./Carosal";
import "./ProductCard.css";

export default function ProductCard({ prop }) {
  let current = useCarosal(prop);
  return (
    <div>
      <div className="Product-container">
        <img src={prop[current]} alt="" className="Product-container-img" />
      </div>
    </div>
  );
}
