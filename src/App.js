import { BrowserRouter, Router, RouterProvider } from "react-router-dom";
import { RouterObj } from "./routing/HeaderRouter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={RouterObj} />
    </div>
  );
}
