import axios from "axios";
import { useState } from "react";
import {
  BiCalculator,
  BiEuro,
  BiLineChart,
  BiSolidDashboard,
} from "react-icons/bi";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const API_URL = `http://localhost:8000/api`;

// eslint-disable-next-line react/prop-types
function DashboardSidebar({ onClickItem }) {
  const [active, setActive] = useState("devise");

  const handleActiveMenu = (menu) => {
    setActive(menu);
  };

  const handleLogout = () => {
    axios
      .post(`${API_URL}/logout`)
      .then((res) => {
        console.log("Hello" + res.data);
        Cookies.remove("ACCESS_ADMIN_TOKEN");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section id="sidebar">
        <a
          href="#"
          className="brand none text-muted mt-2"
          style={{ marginLeft: "70px" }}
        >
          <strong>
            Change
            <span style={{ color: "#bd4515" }}>o.</span>
          </strong>
        </a>
        <ul className="side-menu top">
          <li
            className={active === "devise" ? "active" : ""}
            onClick={() => {
              handleActiveMenu("devise");
              onClickItem("sectionDevise");
            }}
          >
            <a href="#" className="none">
              <BiEuro />
              <span className="text mx-2">Devises</span>
            </a>
          </li>
          <li
            className={active === "cours" ? "active" : ""}
            onClick={() => {
              handleActiveMenu("cours");
              onClickItem("sectionCours");
            }}
          >
            <a href="#" className="none">
              <BiLineChart />
              <span className="text mx-2">Cours de change</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a
              name=""
              id=""
              className="logout none"
              href="/"
              role="button"
              onClick={handleLogout}
            >
              <BiSolidDashboard />
              <span className="text mx-2">Logout</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default DashboardSidebar;
