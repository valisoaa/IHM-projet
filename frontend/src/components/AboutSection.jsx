function AboutSection() {
  return (
    <>
      <section className="my-5" id="about">
        <h2 className="subtitle">A propos</h2>
        <div className="row my-4">
          <div className="col-lg-6 d-flex align-items-center">
            <p style={{ fontSize: "1em" }}>
              Bienvenue sur notre plateforme de change de devises! Nous sommes
              dédiés à fournir des services de change de devises sans problèmes
              et sécurisés à nos clients. Que vous soyez un voyageur à la
              recherche d'un change étranger pratique ou une entreprise ayant
              besoin de solutions de conversion de devises efficaces, nous avons
              ce qu'il vous faut.Notre plateforme offre des taux compétitifs,
              des interfaces conviviales et un support client fiable pour
              garantir que votre éxperience de change soit à la fois pratique
              enrichissante. Rejoignez-nous et découvrez la facilité d'échanger
              des devises en toute confiance.
            </p>
          </div>
          <div className="col-lg-6 gx-5 d-flex justify-content-center">
            <img
              src="./currency.svg"
              style={{ color: "red" }}
              height={280}
              width={500}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
