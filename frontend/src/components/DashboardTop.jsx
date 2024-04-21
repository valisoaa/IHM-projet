import { BiCalculator, BiDollar, BiEuro } from "react-icons/bi";
function DashboardTop() {
  return (
    <>
      <div className="head-title">
        <div className="left">
          <h2>RAJOELINA Andry Nirina</h2>
        </div>
      </div>

      <ul className="box-info">
        <li>
          <i className="bx bxs-calendar-check">
            <BiCalculator />
          </i>
          <span className="text">
            <h3 style={{ fontSize: "22px", fontWeight: "bold" }}>30 000 Ar</h3>
            <p>Solde actuel</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-calendar-check">
            <BiDollar />
          </i>
          <span className="text">
            <h3 style={{ fontSize: "22px", fontWeight: "bold" }}>200 000 Ar</h3>
            <p>Dette</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle">
            <BiEuro />
          </i>
          <span className="text">
            <h3 style={{ fontSize: "22px", fontWeight: "bold" }}>4 000 Ar</h3>
            <p>Montant à verser</p>
          </span>
        </li>
      </ul>
    </>
  );
}

export default DashboardTop;
