import { TiArrowBack } from "react-icons/ti";
import { CiLock } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import "../registerFiles/register.css";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../FireBase";
const provider = new GoogleAuthProvider();
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = response.user;
      if (user) {
        navigate("/");
        console.log("qeydiyat edildi");
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
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
      <div className="registerContainer">
        <div className="registerLogo">
          <div className="registerHeader">
            <h4>Welcome</h4>
            <button className="back" onClick={() => navigate(-1)}>
              <TiArrowBack />
            </button>
          </div>
          <p>Create a new account</p>
        </div>
        <form>
          <label>Email</label>
          <div className="registerInpt">
            <span>
              {" "}
              <AiOutlineMail />
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <label>Password</label>
          <div className="registerInpt">
            <span>
              {" "}
              <CiLock />
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </form>
        <div className="registerFooter">
          <button className="getGoogle" onClick={googleWithRegister}>
            Google with Register
          </button>
          <button className="loginBtn" onClick={register}>
            Register
          </button>
        </div>
        <div className="registerNoAcount">
          <p>Do you have an account?</p>
          <button
            className="getRegister authBtn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
export default Register;
