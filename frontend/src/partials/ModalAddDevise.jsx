import axios from "axios";
import { useState } from "react";
import {
  BiBarcode,
  BiDollar,
  BiLogoBitcoin,
  BiSolidCity,
} from "react-icons/bi";
import { Fa500Px } from "react-icons/fa";
import Swal from "sweetalert2";

const API_URL = `http://localhost:8000/api`;

function ModalAddDevise() {
  const [devise, setDevise] = useState({
    Nom: "",
    Devise: "",
    Code: "",
    Symbole: "",
    Territoire: "",
  });
  //   const [page] = useState(0);
  //   const [limit] = useState(10);

  //===========================
  // AJOUTER UN NOUVEAU DEVISE
  //===========================
  const handleAddDevise = () => {
    axios
      .post(`${API_URL}/currencies`, devise)
      .then((res) => {
        setDevise(res.data.data);
        Swal.fire({
          text: "Devise ajouté!!",
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
            <div className="modal-header d-flex justify-content-center align-items-center">
              <h4 className="modal-title" id="modalTitleId">
                Ajouter un nouveau devise
              </h4>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="nom"
                  id="nom"
                  placeholder=""
                  onChange={(e) =>
                    setDevise({ ...devise, Devise: e.target.value })
                  }
                />
                <label htmlFor="nom" className="text-muted">
                  <BiDollar /> Devise
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="nom"
                  id="nom"
                  placeholder=""
                  onChange={(e) =>
                    setDevise({ ...devise, Nom: e.target.value })
                  }
                />
                <label htmlFor="nom" className="text-muted">
                  <BiLogoBitcoin /> Nom de devise
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="code"
                  id="code"
                  placeholder=""
                  onChange={(e) =>
                    setDevise({ ...devise, Code: e.target.value })
                  }
                />
                <label htmlFor="code" className="text-muted">
                  <BiBarcode /> Code devise
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="symbole"
                  id="symbole"
                  placeholder=""
                  onChange={(e) =>
                    setDevise({ ...devise, Symbole: e.target.value })
                  }
                />
                <label htmlFor="symbole" className="text-muted">
                  <Fa500Px /> Symbole devise
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="pays"
                  id="pays"
                  placeholder=""
                  onChange={(e) =>
                    setDevise({ ...devise, Territoire: e.target.value })
                  }
                />
                <label htmlFor="pays" className="text-muted">
                  <BiSolidCity /> Pays
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
                onClick={handleAddDevise}
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

export default ModalAddDevise;
