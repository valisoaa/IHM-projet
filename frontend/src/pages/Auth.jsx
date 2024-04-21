import axios from "axios";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

const API_URL = `http://localhost:8000/api/login`;

function Auth() {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setshowPassword] = useState(false);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  // =======================
  // Valider les formulaires
  // =======================
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}`, auth)
      .then((res) => {
        console.log(res.data);
        setAuth(res.data);
        navigate("/dashboard");
        Cookies.set("ACCESS_ADMIN_TOKEN", res.data.token, { expires: 1 });
      })
      .catch((err) => {
        if (err.response.status === 406) {
          setError({ email: err.response.data });
        } else if (err.response.status === 401) {
          setError({ password: err.response.data });
        }
      });
  };

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col
            lg={4}
            md={6}
            sm={8}
            xs={10}
            style={{
              marginTop: "200px",
              border: "1px solid var(--light)",
              padding: "30px 25px 25px 30px",
            }}
            className="shadow-sm"
          >
            <h3 className="pb-3" style={{ fontWeight: "600" }}>
              {" "}
              Se connecter
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={(e) => setAuth({ ...auth, email: e.target.value })}
                />
                <label htmlFor="formId1">
                  <FaEnvelope /> Email
                </label>

                {error.email && (
                  <span className="text text-danger m-2">{error.email}</span>
                )}
              </div>

              <div className="form-floating mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={(e) =>
                    setAuth({ ...auth, password: e.target.value })
                  }
                />
                <label htmlFor="formId1">
                  <FaLock /> Mot de passe
                </label>

                {error.password && (
                  <span className="text text-danger m-2">{error.password}</span>
                )}
              </div>

              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="check"
                  onChange={handleShowPassword}
                />
                <label className="form-check-label" htmlFor="check">
                  {" "}
                  Voir mot de passe{" "}
                </label>
              </div>

              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  className="btn btn-lg"
                  style={{
                    background: "grey",
                    border: "none",
                  }}
                >
                  Se connecter
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Auth;
