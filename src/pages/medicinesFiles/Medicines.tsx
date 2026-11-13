import { useState } from "react";
import "./medicines.css";
import { Productss } from "../../Products";
import { FiPlus } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import MainHealth from "../../components/main/MainHealth";
import { useDispatch, useSelector } from "react-redux";
import type { BasketInitialState } from "../../type/basketType";
import { addBasket } from "../../redux/basketSlice";
import type { WishListInitialState } from "../../type/wishList";
import { addWishList } from "../../redux/wishList";
import type { RootState } from "../../redux/store";
import { auth } from "../../FireBase";
import { useNavigate } from "react-router-dom";
import AnimateOnScroll from "../../components/AnimateOnScroll";
function Medicines() {
  const navigate = useNavigate();
  const { wishList } = useSelector((state: RootState) => state.wishList);
  const { product } = Productss;
  const dispatch = useDispatch();
  const handleAdd = (item: any) => {
    const newProduct: BasketInitialState = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      category: item.category,
      description: item.description,
      quantity: item.quantity,
    };
    dispatch(addBasket(newProduct));
  };
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("all");
  const [qiymet, setQiymet] = useState("low-to-high");

  const flteredProducts = product
    .filter((item) => {
      let searchValue = item.title
        .toLowerCase()
        .trim()
        .includes(inputValue.toLowerCase().trim());
      let categorys: any = true;
      if (category === "all") {
        categorys = item.category;
      } else if (category === "Painkillers") {
        categorys = item.category === "Painkillers";
      } else if (category === "Vitamins") {
        categorys = item.category === "Vitamins";
      } else if (category === "Herbal") {
        categorys = item.category === "Herbal";
      } else if (category === "Gastrointestinal") {
        categorys = item.category === "Gastrointestinal";
      } else if (category === "Cold-and-flu") {
        categorys = item.category === "Cold-and-flu";
      } else if (category === "Allergy") {
        categorys = item.category === "Allergy";
      } else if (category === "Skin-care") {
        categorys = item.category === "Skin-care";
      } else if (category === "Cardiovascular") {
        categorys = item.category === "Cardiovascular";
      }

      return categorys && searchValue;
    })
    .sort((a, b): any => {
      if (qiymet === "low-to-high") {
        return a.price - b.price;
      }
      if (qiymet === "high-to-low") {
        return b.price - a.price;
      }
    });
  const handleWishList = (item: any) => {
    const newProduct: WishListInitialState = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      category: item.category,
      description: item.description,
      quantity: item.quantity,
    };
    dispatch(addWishList(newProduct));
  };
  return (
    <>
      <MainHealth />

      <div className="filteredDiv">
        <div className="filteredItem">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Painkillers">Painkillers</option>
            <option value="Vitamins">Vitamins</option>
            <option value="Herbal">Herbal</option>
            <option value="Gastrointestinal">Gastrointestinal</option>
            <option value="Cold-and-flu">Cold and Flu</option>
            <option value="Allergy">Allergy</option>
            <option value="Skin-care">Skin Care</option>
            <option value="Cardiovascular">Cardiovascular</option>
          </select>
          <select value={qiymet} onChange={(e) => setQiymet(e.target.value)}>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="productsConatiner">
        {flteredProducts.map((item) => {
          return (
            <AnimateOnScroll>
              <div key={item.id} className="itemContainer">
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="productText2">
                  <strong>Price: ${item.price}</strong>
                  <div className="productBtn">
                    <button
                      className="favoriteAdd"
                      onClick={() =>
                        auth.currentUser
                          ? handleWishList(item)
                          : navigate("/login")
                      }
                    >
                      {wishList.some((items) => items.id === item.id) ? (
                        <GoHeartFill />
                      ) : (
                        <GoHeart />
                      )}
                    </button>
                    <button
                      className="addBtn"
                      onClick={() =>
                        auth.currentUser ? handleAdd(item) : navigate("/login")
                      }
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>
    </>
  );
}
export default Medicines;
