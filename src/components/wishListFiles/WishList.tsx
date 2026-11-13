import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { MdClear } from "react-icons/md";
import { removeItem, toggleWishList } from "../../redux/wishList";
import "./wishList.css";
import { addBasket } from "../../redux/basketSlice";
function WishList() {
  const { wishListState, wishList } = useSelector(
    (state: RootState) => state.wishList,
  );
  const dispatch = useDispatch();
  return (
    <>
      {wishListState && (
        <div className="wishListOverlay">
          <div className="wishListItem">
            <div className="wishListHeader">
              <h3>Your WishList</h3>
              <button
                className="wishListToggle"
                onClick={() => dispatch(toggleWishList())}
              >
                <MdClear />
              </button>
            </div>
            <div className="wishlistProducts">
              {wishList.map((item) => {
                return (
                  <div key={item.id} className="itemConteiner">
                    <div className="itemContent">
                      <img
                        src={item.image}
                        alt="sekil"
                        width={"100px"}
                        height={"100px"}
                      />
                      <h3>{item.title}</h3>
                      <strong> Price: {item.price} $</strong>
                      <button onClick={() => dispatch(addBasket(item))}>
                        Add Basket
                      </button>
                    </div>
                    <div className="removeBtnDiv">
                      <button
                        className="removeBtn"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        <MdClear />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default WishList;
