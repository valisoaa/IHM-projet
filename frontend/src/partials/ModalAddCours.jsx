import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = `http://localhost:8000/api`;

function ModalAddCours() {
  const [cours, setCours] = useState({
    taux: "",
    devise_source_id: "",
    devise_destination_id: "",
  });
  const [page] = useState(0);
  const [limit] = useState(10);

  const [data, setData] = useState([]); // State pour le devise source et destination

  //===========================================
  // RECUPERER UN DEVISE SOURCE ET DESTINATION
  //===========================================
  useEffect(() => {
    axios
      .get(`${API_URL}/devises`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("Erreur de récuperation: " + err);
      });
  }, [page, limit]);

  //===========================
  // AJOUTER UN COURS DE CHANGE
  //===========================
  const handleAddCours = () => {
    axios
      .post(`${API_URL}/taux`, cours)
      .then((res) => {
        setCours(res.data.data);
        Swal.fire({
          text: res.data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className="modal fade"
        id="modalId"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={5}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header d-flex justify-content-center align-items-center">
              <h4 className="modal-title" id="staticBackdropLabel">
                Ajouter un nouveau cours
              </h4>
            </div>
            <div className="modal-body text-muted">
              <div className="mb-3 text-muted">
                <select
                  className="form-select form-select"
                  name=""
                  id=""
                  onChange={(e) =>
                    setCours({ ...cours, devise_source_id: e.target.value })
                  }
                >
                  <option selected>Devise Source</option>
                  {data.map((devise) => (
                    <option key={devise.id} value={devise.id}>
                      {devise.nom}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3 text-muted">
                <select
                  className="form-select form-select"
                  name=""
                  id=""
                  onChange={(e) =>
                    setCours({
                      ...cours,
                      devise_destination_id: e.target.value,
                    })
                  }
                >
                  <option selected>Devise Destination</option>
                  {data.map((devise) => (
                    <option key={devise.id} value={devise.id}>
                      {devise.nom}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  min={0}
                  placeholder=""
                  onChange={(e) => setCours({ ...cours, taux: e.target.value })}
                />
                <label htmlFor="formId1">Taux</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Annuler
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddCours}
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalAddCours;
