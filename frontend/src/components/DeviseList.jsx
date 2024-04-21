import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = `http://localhost:8000/api/currencies`;

function DeviseList() {
  const [devises, setDevises] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        setDevises(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getSource = (code) => {
    return `./svg/${code.slice(0, 2).toLowerCase()}.svg`;
  };

  return (
    <>
      <section id="devise">
        <h2 className="subtitle my-3">Devises disponibles</h2>
        <div className="table-responsive table-hover">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Devise</th>
                <th scope="col">Nom</th>
                <th scope="col">Code</th>
                <th scope="col">Symbole</th>
                <th scope="col">Pays</th>
              </tr>
            </thead>
            <tbody>
              {devises.map((devise) => (
                <tr key={devise.id}>
                  <td scope="row" className="py-2">
                    <img
                      src={getSource(devise.Code)}
                      width={35}
                      style={{ marginRight: "15px" }}
                    />
                    <Link
                      to={`/currency/${devise.Code}`}
                      className="devise-style"
                    >
                      {devise.Devise}
                    </Link>
                  </td>
                  <td scope="row">{devise.Nom}</td>
                  <td scope="row">{devise.Code}</td>
                  <td scope="row">{devise.Symbole}</td>
                  <td scope="row">{devise.Territoire}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default DeviseList;
