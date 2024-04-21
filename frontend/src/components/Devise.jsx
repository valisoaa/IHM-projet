import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../partials/Spinner";

const API_URL = `http://localhost:8000/api/currencies`;

function Devise() {
  const [devises, setDevises] = useState([]);
  const [page] = useState(1);
  const [loading, setLoading] = useState(true);
  const [limit] = useState(10);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        setDevises(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Erreur de récuperation de devise:" + err);
      });
  }, [page, limit]);
  return (
    <>
      <div className="todo">
        <div className="head">
          <h3>Symboles devises</h3>
        </div>
        <ul className="todo-list">
          {loading ? (
            <Spinner />
          ) : (
            devises.map((devise) => (
              <li className="completed" key={devise.id}>
                <strong>
                  {devise.Nom}
                  <i className="bx bx-dots-vertical-rounded"></i>
                </strong>
                {devise.Symbole}
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default Devise;
