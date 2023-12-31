import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { registerAuth } from "../../redux/actions/AuthAction";
import { Link, useNavigate } from "react-router-dom";

// import component
import Button from "../../components/Button";

// icon
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faEye,
  faEyeSlash,
  faLocationDot,
  faLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// import css
import "./_style.scss";

export default function Register() {
  // bahan
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telp, setTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const push = useNavigate();

  // process register

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerAuth({ name, telp, email, password, alamat }));
    push('/login');
  };

  // showpassword
  function showPass() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="box-register">
      <div className="register-container">
        {/* register title */}
        <h2 className="register-title">register</h2>
        {/* form */}
        <form onSubmit={handleRegister}>
          {/* space */}
          <div className="register-space">
            {/* group 1 */}
            <div className="container-name-telp-register">
              {/* username */}
              <div className="username-register">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#7f5af0", fontSize: "1.5rem" }}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* no telp */}
              <div className="telepon-register">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#7f5af0", fontSize: "1.5rem" }}
                />
                <input
                  type="text"
                  name="telepon"
                  placeholder="No Hp"
                  value={telp}
                  onChange={(e) => setTelp(e.target.value)}
                />
              </div>
            </div>
            {/* group 2 */}
            <div className="container-email-pass-register">
              {/* email */}
              <div className="email-register">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#7f5af0", fontSize: "1.5rem" }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* password */}
              <div className="password-register">
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: "#7f5af0", fontSize: "1.5rem" }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FontAwesomeIcon
                  onClick={showPass}
                  icon={showPassword ? faEyeSlash : faEye}
                  style={{ color: "#7f5af0", fontSize: "1.2rem" }}
                />
              </div>
            </div>
            {/* alamat */}
            <div className="alamat-register">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#7f5af0", fontSize: "1.5rem" }}
              />
              <input
                type="text"
                name="alamat"
                placeholder="Alamat"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
            <Button
              className="btn-register"
              textbtn="Register"
              accept="submit"
            />
          </div>
          <p className="link-login">
            If you have account,
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
