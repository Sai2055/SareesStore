import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BlogDescription.css";
export default function BlogDescription() {
  return (
    <div className="blog-descrption-container">
      <div className="blog-description-header">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          fugiat!
        </h2>
      </div>
      <div className="blog-description-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quod
        incidunt totam doloribus deleniti iste ducimus? Dicta magnam natus
        voluptas.
      </div>
      <div className="description-separator"></div>
      <div className="blog-description-footer">
        <div className="blog-user">
          <FontAwesomeIcon icon={faUser} />

          <p>LOREMNAME</p>
        </div>
        <div className="blog-date">
          <FontAwesomeIcon icon={faCalendar} />

          <p>00-00-0000</p>
        </div>
      </div>
    </div>
  );
}
