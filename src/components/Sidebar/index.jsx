import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { logOutSlice } from "../../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";

// import component
import Logo from "../Logo";
import Menu from "./Menu";

// import css
import "./_style.scss";

// import icon
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
    const push = useNavigate();
    const dispatch = useDispatch();

  function logOut() {
    dispatch(logOutSlice());
    push("/login");
  }

  return (
    <div className="sidebar">
      <div className="container-menu">
        <Logo />
        <Menu />
      </div>

      <div className="btn-logout" onClick={logOut}>
      <FontAwesomeIcon
            icon={faRightFromBracket}
            style={{ fontSize: "18px" }}
          />
        <h4>Log Out</h4>
      </div>
    </div>
  );
}