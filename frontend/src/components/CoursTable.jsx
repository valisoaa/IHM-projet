import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../partials/Spinner";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiSolidPencil, BiSolidPlusCircle } from "react-icons/bi";
import ModalAddCours from "../partials/ModalAddCours";
import Swal from "sweetalert2";

const API_URL = `http://localhost:8000/api`;

function CoursTable() {
  const [cours, setCours] = useState([]);
  const [page] = useState(1);
  const [limit] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/tauxWithdevises`)
      .then((res) => {
        setLoading(false);
        setCours(res.data.data);
      })
      .catch((err) => {
        console.log("Erreur de tauxWithDevise: " + err);
      });
  }, [page, limit]);

  //==============================
  // SUPPRIMER UN COURS DE DEVISE
  //==============================
  const handleDeleteCours = (id) => {
    axios
      .delete(`${API_URL}/taux/${id}`)
      .then(() => {
        Swal.fire({
          text: "Voulez-vous supprimer ce cours?",
          showConfirmButton: true,
          showCancelButton: true,
          icon: "warning",
          cancelButtonText: "Annuler",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              text: "Cours supprimé!!",
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
      <h2 className="subtitle">Cours actuelles</h2>
      <hr />
      <div className="mt-2 mb-4 float-end mx-3">
        <button
          type="button"
          className="btn text text-info px-2 btn-perso"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          <BiSolidPlusCircle /> Ajouter un nouveau cours
        </button>

        {/** MODAL D'AJOUT */}
        <ModalAddCours />
      </div>
      <div className="table-responsive-md shadow-sm p-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Cours</th>
              <th scope="col">Valeur</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6}>
                  <Spinner />
                </td>
              </tr>
            ) : (
              cours.map((c) => (
                <tr key={c.id}>
                  <td>
                    {c.devise_source.code}/{c.devise_destination.code}
                  </td>
                  <td>{c.taux}</td>
                  <td>{new Date(c.updated_at).toLocaleString()}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning text-white"
                    >
                      <BiSolidPencil />
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger text-white mx-1"
                      onClick={() => handleDeleteCours(c.id)}
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

export default CoursTable;
