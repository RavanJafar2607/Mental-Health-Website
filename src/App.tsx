import "./App.css";
import Header from "./components/headerFiles/Header";
import { Route, Routes } from "react-router-dom";

import About from "./components/aboutFiles/About";
import Contact from "./components/contactFiles/Contact";
import Footer from "./components/footerFiles/Footer";
import Doctor from "./pages/doctorFiles/Doctor";
import Home from "./pages/homeFiles/Home";
import { useEffect } from "react";
import Medicines from "./pages/medicinesFiles/Medicines";
import Basket from "./components/basketFiles/Basket";
import type { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import WishList from "./components/wishListFiles/WishList";
import Login from "./pages/loginFiles/Login";
import Register from "./pages/registerFiles/Register";
function App() {
  const { basket } = useSelector((state: RootState) => state.basket);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  return (
    <>
      <Header />
      <Basket />
      <WishList />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/about" element={<About />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
