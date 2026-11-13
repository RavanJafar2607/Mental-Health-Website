import "./services.css";
function Services() {
  return (
    <>
      <section className="servicesCont">
        <div className="servicesHeader">
          <h2 className="servicesH4">Our Services</h2>
          <p className="servicesP">
            Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh{" "}
            <br />
            quis ullamcorper quis. Quam enim tortor, id sed
          </p>
        </div>
        <div className="servicesCards">
          <div className="servicesCard">
            <img src="/doctor.png" alt="" />
            <h4>Counseling</h4>
            <p>
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              quis ullamcorper quis. Quam enim tortor.
            </p>
          </div>
          <div className="servicesCard">
            <img src="/shield.png" alt="" />
            <h4>Support groups</h4>
            <p>
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              quis ullamcorper quis. Quam enim tortor.
            </p>
          </div>
          <div className="servicesCard">
            <img src="/pills.png" alt="" />
            <h4>Prescription medicine</h4>
            <p>
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              quis ullamcorper quis. Quam enim tortor.
            </p>
          </div>
          <div className="servicesCard">
            <img src="/ThermoGun.png" alt="" />
            <h4>Therapies</h4>
            <p>
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              quis ullamcorper quis. Quam enim tortor.
            </p>
          </div>
          <div className="servicesCard">
            <img src="/hospital.png" alt="" />
            <h4>Brain stimulation</h4>
            <p>
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              quis ullamcorper quis. Quam enim tortor.
            </p>
          </div>
          <div className="servicesCard">
            <img src="/Stetoscope.png" alt="" />
            <h4>Eye Movement</h4>
            <p>
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              quis ullamcorper quis. Quam enim tortor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
