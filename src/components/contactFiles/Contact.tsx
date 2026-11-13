import "./contact.css";
function Contact() {
  return (
    <>
      <section className="contactSec">
        <div className="conactItems">
          <div className="contactText">
            <p className="oneP">Need a doctor’s counsealing?</p>
            <h2>
              Request a Call Back <br /> Today Now
            </h2>
            <p>
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              <br />
              quis ullamcorper quis. Quam enim tortor, id sed
            </p>
            <div className="photos">
              <img src="/qadin.png" alt="" />
              <img src="/kisi1.png" alt="" />
              <img src="/kisi2.png" alt="" />
              <p>
                Our Doctors are waiting <br />
                for your service.
              </p>
            </div>
          </div>
          <div className="contactInput">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Phone Number" />
            <input type="date" placeholder="Date" />
            <button>Request Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
