import "./about.css";
import { CiCircleCheck } from "react-icons/ci";
function About() {
  return (
    <>
      <section className="aboutSec">
        <div className="aboutHeader">
          <h2>Why Should you take our services</h2>
          <p>
            Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
            <br />
            quis ullamcorper quis. Quam enim tortor, id sed
          </p>
        </div>
        <div className="aboutDetails">
          <img src="/aboutPhoto.png" alt="" />
          <div className="aboutText">
            <div className="aboutCard">
              <div className="aboutH4">
                <h4>Experience</h4>
                <span>
                  <CiCircleCheck />
                </span>
              </div>
              <p>
                Eu sit proin amet quis malesuada vitae elit. Vel consectetur
                nibh <br /> quis ullamcorper quis. Quam enim tortor, id sed
              </p>
            </div>
            <div className="aboutCard">
              <div className="aboutH4">
                <h4>Commitment</h4>
                <span>
                  <CiCircleCheck />
                </span>
              </div>
              <p>
                Eu sit proin amet quis malesuada vitae elit. Vel consectetur
                nibh <br /> quis ullamcorper quis. Quam enim tortor, id sed
              </p>
            </div>
            <div className="aboutCard">
              <div className="aboutH4">
                <h4>Facilities</h4>
                <span>
                  <CiCircleCheck />
                </span>
              </div>
              <p>
                Eu sit proin amet quis malesuada vitae elit. Vel consectetur
                nibh <br /> quis ullamcorper quis. Quam enim tortor, id sed
              </p>
            </div>
            <div className="aboutCard">
              <div className="aboutH4">
                <h4>Relationships</h4>
                <span>
                  <CiCircleCheck />
                </span>
              </div>
              <p>
                Eu sit proin amet quis malesuada vitae elit. Vel consectetur
                nibh <br /> quis ullamcorper quis. Quam enim tortor, id sed
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
