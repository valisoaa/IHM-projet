import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="400"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Change<span>o.</span>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto me-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" aria-current="page">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" aria-current="page">
                  Nos services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" aria-current="page">
                  A propos
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn-perso px-3"
                  to="/login"
                  aria-current="page"
                >
                  Gérer le devise
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
