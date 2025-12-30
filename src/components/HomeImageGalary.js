import { useSelector } from "react-redux";
import AllProductImage from "../reusableComponents/AllProductImage";

import "./HomeImageGalary.css";
export default function HomeImageGalary() {
  const { womenProducts, menProducts } = useSelector((state) => state.products);
  const womenGalary = womenProducts.slice(0, 4);
  const menGalary = menProducts.slice(0, 4);
  return (
    <div className="home-galary-container">
      <div className="home-galary-heading">
        <h1>SHOP THE LOOKS</h1>
        <p>
          Our latest endeavour features designs from around the world with
          materials so comfortable you won't want to wear anything else every
          again.
        </p>
      </div>
      <div className="home-galary-womenGalary">
        {womenGalary.map((g) => (
          <AllProductImage prop={g} />
        ))}
      </div>
      <div className="home-galary-menGalary">
        {menGalary.map((g) => (
          <AllProductImage prop={g} />
        ))}
      </div>
    </div>
  );
}
