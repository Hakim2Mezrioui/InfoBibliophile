import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faShop,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Fragment>
      <header className={`${classes.header}`}>
        <span className="d-flex justify-content-between">
          <img src="images/logo.jpg" />
          <nav>
            <ul>
              <li>
                <Link>
                  <FontAwesomeIcon
                    className="me-1"
                    icon={faHome}
                    color="white"
                  />
                  Home
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon
                    className="me-1"
                    icon={faShop}
                    color="white"
                  />
                  BookShop
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon
                    className="me-1"
                    icon={faInfoCircle}
                    color="white"
                  />
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </span>
        <Link className={`${classes["btn-login"]}`}>
            <FontAwesomeIcon className="me-3" icon={faSignIn} />
            Login
        </Link>
      </header>
    </Fragment>
  );
};

export default Header;
