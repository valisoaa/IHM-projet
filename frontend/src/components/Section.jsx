import { BiSolidDollarCircle } from "react-icons/bi";

function Section() {
  return (
    <>
      <section
        id="hero"
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <h1 data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
          Bienvenue, Qui sommes nous?
        </h1>
        <h3
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="700"
          style={{ color: "whitesmoke" }}
        >
          <BiSolidDollarCircle /> Nous sommes une société de change de devise
          Malagasy <BiSolidDollarCircle />{" "}
        </h3>
        <a
          href="#devise"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          <p className="btn btn-perso">Voir le taux de change</p>
        </a>
      </section>
    </>
  );
}

export default Section;
