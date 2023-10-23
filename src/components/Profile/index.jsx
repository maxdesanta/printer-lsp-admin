import { useEffect } from "react";
import { profileAuth } from "../../redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";

// import css
import "./_style.scss";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.auth.isUserNamaResult);
  
    useEffect(() => {
        dispatch(profileAuth());
    }, [dispatch])

  return (
    <div className="profile wrapper">
      <div className="p-text">Hi, {userName}</div>
      <div className="p-image">
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: "#7f5af0", fontSize: "30px" }}
        />
      </div>
    </div>
  );
}