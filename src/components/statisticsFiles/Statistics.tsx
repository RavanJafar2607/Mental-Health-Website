import { FaPlus } from "react-icons/fa";
import "./statistics.css";
function Statistics() {
  return (
    <>
      <section className="statisticsSec">
        <div className="statisticsCard1">
          <strong>24/7</strong>
          <p>Online Support</p>
        </div>
        <div className="statisticsCard2">
          <strong>100 +</strong>
          <p>Doctors</p>
        </div>
        <div className="statisticsCard3">
          <strong>1M +</strong>
          <p>Active Patiens</p>
        </div>
        <div className="statisticsCard4">
          <strong>5M +</strong>
          <p>interested</p>
        </div>
      </section>
    </>
  );
}
export default Statistics;
