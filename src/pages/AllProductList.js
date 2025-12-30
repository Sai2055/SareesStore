import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/slice/ProductSlice";
import AllProductCard from "../reusableComponents/AllProductCard";

export default function AllProductsList() {
  const dispatch = useDispatch();
  const { entities, menProducts, status, error } = useSelector(
    (state) => state.products
  );
  // console.log(entities);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
      // console.log(entities);
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  let productsArray = Array.isArray(entities) ? entities : [];
  return (
    <div className="product-card-container">
      {entities.map((p) => (
        <AllProductCard prop={p} />
      ))}
    </div>
  );
}
