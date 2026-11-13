import { BsArrowLeftCircle } from "react-icons/bs";
import { IoStarSharp } from "react-icons/io5";
import { BsArrowRightCircle } from "react-icons/bs";
import "./CustomerReviews.css";
import { useState } from "react";
function CustomerReviews() {
  const [currentIndex, SetCurrentIndex] = useState(0);
  const photoArray = [
    {
      id: 1,
      image: "/download.png",
      name: "Floyd Miles",
      text: ` Eu sit proin amet quis malesuada vitae elit. Vel consectetur  nibh quis ullamcorper
      quis. Quam enim tortor. Eu sitproin amet quis malesuada vitae elit. `,
      date: "24 May, 2020",
    },
    {
      id: 1,
      image: "/photo1.png",
      name: "Emma Watson",
      text: ` Eu sit proin amet quis malesuada vitae elit. Vel consectetur  nibh quis ullamcorper
      quis. Quam enim tortor. Eu sitproin amet quis malesuada vitae elit. `,
      date: "28 December, 2025",
    },
    {
      id: 1,
      image: "/photo2.png",
      name: "Sophia Johnson",
      text: ` Eu sit proin amet quis malesuada vitae elit. Vel consectetur  nibh quis ullamcorper
      quis. Quam enim tortor. Eu sitproin amet quis malesuada vitae elit.`,
      date: "26 June, 2022",
    },
  ];
  const nextUser = () => {
    SetCurrentIndex((prevIndex) => {
      if (photoArray.length - 1 === prevIndex) {
        return 0;
      }
      return prevIndex + 1;
    });
  };
  const prevIndex = () => {
    SetCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return 0;
      }
      return prevIndex - 1;
    });
  };
  const currentPerson = photoArray[currentIndex];
  return (
    <>
      <section className="customerSec">
        <div className="customerReviewsHeader">
          <h2>What Our Client’s Say</h2>
          <p>
            Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh{" "}
            <br />
            quis ullamcorper quis. Quam enim tortor, id sed
          </p>
        </div>
        <div className="review">
          <button className="arrow">
            <BsArrowLeftCircle size={30} onClick={prevIndex} />
          </button>
          <div className="useDetails">
            <div className="namePh">
              <img src={currentPerson.image} alt="" />
              <div className="nameDate">
                <h4>{currentPerson.name}</h4>
                <p>{currentPerson.date}</p>
                <div className="text">
                  <p className="pText">{currentPerson.text}</p>
                </div>
              </div>
              <p className="stars">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </p>
            </div>
            <div className="useText">
              <p>{}</p>
            </div>
          </div>
          <button className="arrow" onClick={nextUser}>
            <BsArrowRightCircle size={30} />
          </button>
        </div>
      </section>
    </>
  );
}
export default CustomerReviews;
