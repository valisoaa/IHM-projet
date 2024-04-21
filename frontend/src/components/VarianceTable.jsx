/* eslint-disable react/prop-types */
import { BiSolidUpArrow } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function VarianceTable({ DATA, VARIANCE, COURS }) {
  const JOURS = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const getDAY = (DATE) => JOURS[new Date(DATE).getDay()];
  console.log(DATA);
  const getVariance = (v) => {
    let result = 0;
    const variance = v ? v.toFixed(8) : v;
    if (variance > 0) {
      result = "+" + variance;
    } else if (variance < 0) {
      result = variance;
    }
    return result;
  };

  return (
    <div>
      <div className="table-responsive table-bordered">
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Jour</th>
              <th scope="col">{COURS}</th>
              <th scope="col">Changement</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((data) => (
              <tr key={data.date}>
                <td>{data.date}</td>
                <td>{getDAY(data.date)}</td>
                <td>{data.valeur ? data.valeur.toFixed(4) : data.valeur}</td>
                <td
                  style={{ fontWeight: "500" }}
                  className={
                    VARIANCE[data.date] < 0
                      ? "text text-danger text-center"
                      : "text-success text-center"
                  }
                >
                  {VARIANCE[data.date] > 0 ? (
                    <BiSolidUpArrow
                      className="mx-2"
                      style={{ fontSize: "12px" }}
                    />
                  ) : VARIANCE[data.date] == 0 ? (
                    ""
                  ) : (
                    <BiSolidUpArrow
                      className="mx-2"
                      style={{ transform: "rotate(-180deg)", fontSize: "12px" }}
                    />
                  )}
                  {getVariance(VARIANCE[data.date])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VarianceTable;
