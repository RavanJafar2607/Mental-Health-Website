import { useLocation, useNavigate } from "react-router-dom";
import "./mainHealth.css";
function MainHealth() {
  const location = useLocation();
  const navigate = useNavigate();
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
  return (
    <>
      <main>
        <div className="doctorPhoto">
          <img src="/doctorPhoto.png" alt="" />
        </div>
        <div className="mainTextCont">
          <strong>We Will Help You To Improve Your Mental Health</strong>
          <p className="mainText">
            Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
            quis ullamcorper quis. Quam enim tortor, id sed
          </p>
          <div className="mainBtns">
            <button
              className="mainBtn"
              onClick={(e) => handleScroll(e, "call")}
            >
              Get Appointment
            </button>
            <button className="mainBtn" onClick={() => navigate("/doctor")}>
              Find Specialist
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainHealth;
