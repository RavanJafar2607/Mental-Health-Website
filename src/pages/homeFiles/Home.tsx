import About from "../../components/aboutFiles/About";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import CallToAction from "../../components/callToActionFiles/CallToAction";
import Contact from "../../components/contactFiles/Contact";
import CustomerReviews from "../../components/customerReviewsFlies/CustomerReviews";
import MainHealth from "../../components/main/MainHealth";
import Services from "../../components/servicesFiles/Services";
import Statistics from "../../components/statisticsFiles/Statistics";

function Home() {
  return (
    <div className="container">
      <div id="home">
        <MainHealth />
      </div>

      <AnimateOnScroll>
        <Statistics />
      </AnimateOnScroll>

      <div id="services">
        <AnimateOnScroll>
          <Services />
        </AnimateOnScroll>
      </div>

      <div id="call">
        <AnimateOnScroll>
          <CallToAction />
        </AnimateOnScroll>
      </div>
      <AnimateOnScroll>
        <CustomerReviews />
      </AnimateOnScroll>

      <div id="about">
        <AnimateOnScroll>
          <About />
        </AnimateOnScroll>
      </div>

      <div id="contact">
        <AnimateOnScroll>
          <Contact />
        </AnimateOnScroll>
      </div>
    </div>
  );
}

export default Home;
