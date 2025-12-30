import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const navigate = useNavigate();
  function handleClose() {
    navigate(-1);
  }
  return (
    <>
      <div className="close-icon" onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="Search-container">
        <div className="search-inner-container">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="Input-content"
          />
          <button className="btn-content">SEARCH</button>
        </div>
        <div className="input-suggestion">
          <span>Search: </span> <p>Kurta Pajama, Saree...</p>
        </div>
      </div>
    </>
  );
}
