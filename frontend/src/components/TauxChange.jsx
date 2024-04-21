import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../partials/Spinner";

const API_URL = `http://localhost:8000/api/tauxWithdevises`;

function TauxChange() {
  const [devises, setDevises] = useState([]);
  const [page] = useState(1);
  const [limit] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        setLoading(false);
        setDevises(res.data.data);
      })
      .catch((err) => {
        console.log("Erreur de tauxWithDevise: " + err);
      });
  }, [page, limit]);

  return (
    <>
      <section className="my-5" id="taux">
        <h2 className="subtitle">Cours actuelles</h2>

        <div className="table-responsive-md shadow-sm p-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Cours</th>
                <th scope="col">Valeur</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td>
                    <Spinner />
                  </td>
                </tr>
              ) : (
                devises.map((devise) => (
                  <tr key={devise.id}>
                    <td>
                      {devise.devise_source.code}/
                      {devise.devise_destination.code}
                    </td>
                    <td>{devise.taux}</td>
                    <td>{new Date(devise.updated_at).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default TauxChange;
