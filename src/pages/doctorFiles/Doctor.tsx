import MainHealth from "../../components/main/MainHealth";
import "./doctor.css";
function Doctor() {
  return (
    <>
      <MainHealth />
      <div className="doctorContainer">
        <div className="doctors">
          <div className="doctorDiv">
            <img src="/doctorEmily.png" alt="" />
            <h2>Emily Miller</h2>
            <div className="doctorAbout">
              <p>
                <strong> Age:</strong>:33
              </p>
              <p>
                <strong> Specialty:</strong> Senior Psychiatrist, PhD in Medical
                Sciences.
              </p>
              <p>
                <strong>About:</strong>
                Dr. Emily Miller has over 15 years of experience. She
                specializes in depression, anxiety disorders, and sleep
                problems. She helps patients restore their mental health using
                modern treatment methods and a personalized approach.
              </p>
              <p>
                <strong>Contact</strong> +994105152607
              </p>
            </div>
          </div>
          <div className="doctorDiv">
            <img src="/doctorJames .png" alt="" />
            <h2>James Smith </h2>
            <div className="doctorAbout">
              <p>
                <strong> Age:</strong>:38
              </p>
              <p>
                <strong> Specialty:</strong> Clinical Psychologist, Cognitive
                Behavioral Therapy (CBT) Specialist.
              </p>
              <p>
                <strong>About:</strong>
                James Smith works with stress management, post-traumatic
                recovery, and self-esteem issues. He provides professional
                support to his patients in changing negative thought patterns
                and improving their quality of life.
              </p>
              <p>
                <strong>Contact</strong> +994105152607
              </p>
            </div>
          </div>
          <div className="doctorDiv">
            <img src="/doctorOlivia.png" alt="" />
            <h2>Olivia Taylor</h2>
            <div className="doctorAbout">
              <p>
                <strong> Age:</strong>:29
              </p>
              <p>
                <strong> Specialty:</strong> Child and Adolescent Psychiatrist,
                Family Therapist.
              </p>
              <p>
                <strong>About:</strong>
                Dr.Olivia Taylor is a specialist in childhood developmental
                delays, adolescent crises, and parent-child relationships. She
                implements comprehensive treatment programs to restore
                intra-family harmony.
              </p>
              <p>
                <strong>Contact</strong> +994105152607
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Doctor;
