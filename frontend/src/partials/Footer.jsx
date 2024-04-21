function Footer() {
  return (
    <div className="my-5">
      <section id="clients" className="clients section-bg">
        <div className="container">
          <h3 className="subtitle my-3">Nos partenaires</h3>
          <div
            className="row d-flex align-items-center justify-content-center "
            data-aos="zoom-in"
          >
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="./partner/BFV-SG.png"
                className="img-fluid"
                alt=""
                width="60"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src="./partner/BNI.webp" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src="./partner/BOA.png" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src="./partner/SMMEC.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
