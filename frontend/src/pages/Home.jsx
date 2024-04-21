import AboutSection from "../components/AboutSection";
import DeviseList from "../components/DeviseList";
import Section from "../components/Section";
import Service from "../components/Service";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

function Home() {
  return (
    <>
      <Header />
      <Section />
      <div className="container">
        <Service />
        <DeviseList />
        <AboutSection />
        <Footer />
      </div>
    </>
  );
}

export default Home;
