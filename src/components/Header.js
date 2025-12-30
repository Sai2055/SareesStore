import { NavElements, NavRightElements } from "../constants/HeaderNavElements";
import "../components/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header-Container">
      <div className="Nav-items">
        {NavElements.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </div>
      <div className="HeaderLog">SareeHub</div>
      <div className="NavRightElements">
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-size" />
          <div className="icon-gap">
            <NavLink
              to="/search"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Search
            </NavLink>
          </div>
        </li>
        <li>Account</li>
        <li>
          <FontAwesomeIcon icon={faBasketShopping} className="icon-size" />
          <div className="icon-gap">
            <NavLink
              to="/myCart"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              MyCart
            </NavLink>
          </div>
        </li>
      </div>
    </div>
  );
}
