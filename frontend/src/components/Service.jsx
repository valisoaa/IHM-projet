import { BiLineChart, BiStats, BiTransfer } from "react-icons/bi";

function Service() {
  return (
    <>
      <section id="services" className="services section-bg my-5">
        <div className="section-title my-5">
          <h2>Services</h2>
          <p>
            Vous cherchez un moyen simple et rapide de changer votre devise
            locale en une autre monnaie sans avoir déplacer physiquement? Alors{" "}
            <strong>Changeo </strong> est la solution parfaite pour vous! Notre
            système de change de devise est conçu pour être rapide, fiable et
            facile à utiliser. Nous vous offrons une expérience de changement de
            devise sans problème , avec taux de change compétitifs et une
            sécurité financière maximale. Nous comprenons que le taux de change
            peuvent fluctuer rapidement,c'est pourquoi notre système est conçu
            pour suivre ces changements en temps réel.Nous utilisons les taux de
            change les plus récents de la Banque Centrale Européenne (BCE) pour
            assurer la précision de nos calculs.
          </p>
        </div>

        <div className="row d-flex justify-content-center">
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i>
                  <BiStats />
                </i>
              </div>
              <h4 className="title">
                <a href="#devise" className="none">
                  Voir le devise disponible
                </a>
              </h4>
              <p className="description">
                Cette service est dédié seulement au comptant de notre produit
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i>
                  <BiTransfer />
                </i>
              </div>
              <h4 className="title">
                <a href="#change" className="none">
                  Changer devise
                </a>
              </h4>
              <p className="description">
                Vous avez besoin de changer le devise!! Faites vos choix,
                choisissez-nous
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i>
                  <BiLineChart />
                </i>
              </div>
              <h4 className="title">
                <a href="#stats" className="none">
                  Statistiques de cours
                </a>
              </h4>
              <p className="description">
                Vous avez besoin de changer le devise!! Faites vos choix,
                choisissez-nous
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
