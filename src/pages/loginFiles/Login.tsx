import { useState } from "react";
import "../loginFiles/login.css";
import { TiArrowBack } from "react-icons/ti";
import { CiLock } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../FireBase";
import { useNavigate } from "react-router-dom";
const provider = new GoogleAuthProvider();
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async (e: any) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        navigate("/");
      }
    } catch (error: any) {
      alert("Giriş xətası: " + error.message);
    }
  };

  const googleWithRegister = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      if (user) {
        navigate("/");
      }
    } catch (error: any) {
      alert(error.message + "giris edile bilmedi");
      console.log(error.message + "giris edile bilmedi");
    }
  };
  return (
    <>
      <div className="loginContainer">
        <div className="loginLogo">
          <div className="loginHeader">
            <h4>Welcome</h4>
            <button className="back" onClick={() => navigate(-1)}>
              <TiArrowBack />
            </button>
          </div>
          <p>Log in to your account</p>
        </div>
        <div className="loginItems">
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Email</label>
            <div className="emailInpt">
              <span>
                {" "}
                <AiOutlineMail />
              </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label>Password</label>
            <div className="emailInpt">
              <span>
                <CiLock />
              </span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="loginFooter">
              <button
                className="getGoogle"
                type="button"
                onClick={googleWithRegister}
              >
                Google with login
              </button>
              <button type="button" className="loginBtn" onClick={login}>
                Login
              </button>
            </div>
          </form>

          <div className="noAcount">
            <p>You don't have an account</p>
            <button
              type="button"
              className="getRegister authBtn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
