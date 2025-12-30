import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Men from "../pages/Men";
import MyCart from "../pages/MyCart";
import Pages from "../pages/Pages";
import Search from "../pages/Search";
import Women from "../pages/Women";
import Layout from "./Layout";

export const RouterObj = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "women",
        element: <Women />,
      },
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
