import type { RootState } from "../../redux/store";
import "./basket.css";
import { useDispatch, useSelector } from "react-redux";
import { MdClear } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import {
  quantityDecrement,
  quantityIncrement,
  removeProduct,
  toggleBasket,
} from "../../redux/basketSlice";

function Basket() {
  const { basket } = useSelector((state: RootState) => state.basket);
  const { basketState } = useSelector((state: RootState) => state.basket);
  const dispatch = useDispatch();
  const total = () => {
    const items = basket.reduce((acc, curr): any => {
      return acc + curr.price * curr.quantity;
    }, 0);
    return items;
  };

  return (
    <>
      {basketState && (
        <div className="basketOverlay">
          <div className="itemConatiner">
            <div className="basketHeader">
              <p>Your Basket</p>
              <button
                className="closeBtn"
                onClick={() => dispatch(toggleBasket())}
              >
                <MdClear />
              </button>
            </div>
            {basket.length === 0 ? (
              <div className="emptyDiv">
                <p>The basket is empty.</p>
              </div>
            ) : (
              basket.map((item) => {
                return (
                  <div key={item.id} className="items">
                    <div className="itemHeader">
                      <img src={item.image} />
                      <button onClick={() => dispatch(removeProduct(item.id))}>
                        {" "}
                        <MdClear />
                      </button>
                    </div>
                    <div className="itemText">
                      <h3>{item.title}</h3>
                      <strong>Price: {item.price} $</strong>
                    </div>
                    <div className="quantityButton">
                      <button
                        className="qBtn"
                        onClick={() => dispatch(quantityIncrement(item.id))}
                      >
                        <GoPlus />
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className="qBtn"
                        onClick={() => dispatch(quantityDecrement(item.id))}
                      >
                        <FiMinus />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
            <div className="basketFooter">
              <p>
                Total:{" "}
                <strong style={{ color: "red" }}>{total().toFixed(2)} $</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Basket;
