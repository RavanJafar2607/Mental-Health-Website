import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import "../headerFiles/header.css";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { themeToggle } from "../../redux/themeSlice";
import type { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { toggleBasket } from "../../redux/basketSlice";
import { toggleWishList } from "../../redux/wishList";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../FireBase";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [hamburgerState, setHamburgerState] = useState(false);
  const hamburgerOpen = () => {
    setHamburgerState(!hamburgerState);
  };
  const { theme } = useSelector((state: RootState) => state.theme);
  const { basket } = useSelector((state: RootState) => state.basket);
  const { wishList } = useSelector((state: RootState) => state.wishList);
  const [value, setValue] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleScroll = (e: any, sectionId: any) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };
  useEffect(() => {
    if (theme === "dark") {
      document.body.className = theme;
      setValue(true);
    } else {
      document.body.className = theme;
      setValue(false);
    }
  }, [theme]);
  const [currentUser, setCurrentUser] = useState<null | any>(null);
  console.log(currentUser);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => subscribe();
  }, []);
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <>
      <header>
        <div className="headerLogo">
          <NavLink to={"/"} className="headerText">
            Oxcare
          </NavLink>
        </div>
        <div
          className={`navBar  ${hamburgerState ? `menuGoster` : `menuGizlet`}`}
        >
          <nav>
            <NavLink
              to={"/#home"}
              className="headerLink"
              onClick={(e) => handleScroll(e, "home")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/#about"}
              className="headerLink"
              onClick={(e) => handleScroll(e, "about")}
            >
              About
            </NavLink>
            <NavLink to={"/doctor"} className="headerLink">
              Doctors
            </NavLink>
            <NavLink
              to={"/#services"}
              className="headerLink"
              onClick={(e) => handleScroll(e, "services")}
            >
              Services
            </NavLink>
            <NavLink to={"/medicines"} className="headerLink">
              Medicines
            </NavLink>
            <NavLink
              to={"/#contact"}
              onClick={(e) => handleScroll(e, "contact")}
              className="headerLink"
            >
              Contact
            </NavLink>
            <div className="headerIcon">
              <div className="wishlists">
                <span
                  className="favoriteIcon"
                  onClick={() => dispatch(toggleWishList())}
                >
                  <MdFavoriteBorder />
                </span>
                <p className="wishlistLength">{wishList.length}</p>
              </div>
              <div className="baskets">
                <span
                  className="basketIcon"
                  onClick={() => dispatch(toggleBasket())}
                >
                  <SlBasket />
                </span>
                <p className="basketLength">{basket.length}</p>
              </div>
              <button
                className="themeBtn"
                onClick={() => dispatch(themeToggle())}
              >
                {value ? <CiLight /> : <CiDark />}
              </button>
            </div>
            {currentUser ? (
              <div className="authCont">
                <button className="authBtn" onClick={handleLogout}>
                  Logout
                </button>
                <p>
                  <span>Welcome</span>-{auth.currentUser?.email}{" "}
                </p>
              </div>
            ) : (
              <div className="authCont">
                <button
                  onClick={() => navigate("/login")}
                  className={"authBtn"}
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className={"authBtn"}
                >
                  Register
                </button>
              </div>
            )}
          </nav>
        </div>
        <div className="hamburgerMenu">
          <button onClick={() => hamburgerOpen()}>
            <GiHamburgerMenu />
          </button>
        </div>
      </header>
    </>
  );
}
export default Header;
