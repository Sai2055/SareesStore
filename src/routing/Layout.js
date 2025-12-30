import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { fetchProducts } from "../redux/slice/ProductSlice";
import "../routing/Layout.css";
export default function Layout() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />

      <div className="body-container">
        <Outlet />
      </div>
    </>
  );
}
