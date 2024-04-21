import axios from "axios";
import { useEffect, useState } from "react";
import { BiScatterChart } from "react-icons/bi";
import Swal from "sweetalert2";

const API_URL = `http://localhost:8000/api/currencies`;

function ModalUpdateDevise({ id }) {
  const [devise, setDevise] = useState([]);
  const [data, setData] = useState({
    Nom: "",
    Code: "",
    Symbole: "",
    Devise: "",
    Territoire: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  //   ========================================
  //   Recuperer les données à partir de son ID
  //   ========================================
  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  //   ========================================
  //   Changer les données à partir de son ID
  //   ========================================
  const handleModify = () => {
    axios
      .put(`${API_URL}/${id}`, data)
      .then((res) => {
        Swal.fire({
          text: "Devise mis à jour!!",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        console.log(data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="modalUpdate"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="modalTitleId">
                Modifier Devise
              </h4>
            </div>

            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="Devise"
                  id="devise"
                  value={data.Devise}
                  onChange={HandleChange}
                  placeholder=""
                />
                <label htmlFor="devise">
                  <BiScatterChart /> Devise
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="Nom"
                  id="nom"
                  value={data.Nom}
                  onChange={HandleChange}
                  placeholder=""
                />
                <label htmlFor="nom">
                  <BiScatterChart /> Nom devise
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="Code"
                  id="code"
                  value={data.Code}
                  onChange={HandleChange}
                  placeholder=""
                />
                <label htmlFor="code">
                  <BiScatterChart /> Code devise
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="Symbole"
                  id="symbole"
                  placeholder=""
                  value={data.Symbole}
                  onChange={HandleChange}
                />
                <label htmlFor="symbole">
                  <BiScatterChart /> Symbole Devise
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="Territoire"
                  id="pays"
                  placeholder=""
                  value={data.Territoire}
                  onChange={HandleChange}
                />
                <label htmlFor="pays">
                  <BiScatterChart /> Pays
                </label>
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
                onClick={handleModify}
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdateDevise;
