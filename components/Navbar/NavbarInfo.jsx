import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css"


const NavbarInfo = () => {
  return (
    <div className="container topbar bg-primary d-none d-lg-block">
      <div className="d-flex justify-content-between">
        <div className="top-info ps-2">
          <small className="me-3">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="me-2 text-secondary"
            />{" "}
            <a href="#" className="text-white">
              123 Street, New York
            </a>
          </small>
          <small className="me-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="me-2 text-secondary"
            />
            <a href="#" className="text-white">
              Email@Example.com
            </a>
          </small>
        </div>
        <div className="top-link pe-2">
          <a href="#" className="text-white">
            <small className="text-white mx-2">Privacy Policy</small>/
          </a>
          <a href="#" className="text-white">
            <small className="text-white mx-2">Terms of Use</small>/
          </a>
          <a href="#" className="text-white">
            <small className="text-white ms-2">Sales and Refunds</small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarInfo;
