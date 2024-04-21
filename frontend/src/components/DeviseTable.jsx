import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../partials/Spinner";
import { BiSolidPencil, BiSolidPlusCircle } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import ModalAddDevise from "../partials/ModalAddDevise";
import Swal from "sweetalert2";
import ModalUpdateDevise from "../partials/ModalUpdateDevise";

const API_URL = `http://localhost:8000/api/currencies`;

function DeviseTable() {
  const [devises, setDevises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page] = useState(1);
  const [limit] = useState(10);
  const [ID, setID] = useState(0);

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

  //==============================
  // SUPPRIMER UN DEVISE
  //==============================
  const handleDeleteDevise = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        Swal.fire({
          text: "Voulez-vous supprimer ce devise?",
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "OK",
          cancelButtonText: "Annuler",
          confirmButtonColor: "#BD4515",
          icon: "warning",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              text: "Devise supprimé!!",
              showConfirmButton: false,
              timer: 2000,
              icon: "success",
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="order">
        <div className="head">
          <h3>Nos Devises</h3>
        </div>
        <div className="mb-4 float-end mx-3">
          <button
            type="button"
            className="btn text text-info px-2 btn-perso"
            data-bs-toggle="modal"
            data-bs-target="#modalId"
          >
            <BiSolidPlusCircle /> Ajouter un nouveau devise
          </button>
          <ModalAddDevise />
          <ModalUpdateDevise id={ID} />
        </div>
        <div className=""></div>
        <table className="table-responsive table-striped ">
          <thead>
            <tr>
              <th className="text-center">Nom</th>
              <th className="text-center">Devise</th>
              <th className="text-center">Code</th>
              <th className="text-center">Pays</th>
              <th className="text-center">Symbole</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Spinner />
            ) : (
              devises.map((devise) => (
                <tr key={devise.id}>
                  <td className="text-center">{devise.Nom}</td>
                  <td className="text-center">{devise.Devise}</td>
                  <td className="text-center">{devise.Code}</td>
                  <td className="text-center">{devise.Territoire}</td>
                  <td className="text-center">{devise.Symbole}</td>
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn btn-warning text-white"
                      data-bs-toggle="modal"
                      data-bs-target="#modalUpdate"
                      onClick={() => setID(devise.id)}
                    >
                      <BiSolidPencil />
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger text-white mx-1"
                      onClick={() => handleDeleteDevise(devise.id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DeviseTable;
