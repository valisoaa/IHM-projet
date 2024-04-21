import { BiExclude, BiUserCircle } from "react-icons/bi";

function DashboardHeader() {
  return (
    <>
      <section id="content">
        <nav>
          <i className="bx bx-menu" style={{ fontSize: "22px" }}>
            <BiExclude />
          </i>

          <div style={{ marginLeft: "90%" }}>
            <a href="#" className="profile">
              <BiUserCircle />
            </a>
          </div>
        </nav>
      </section>
    </>
  );
}

export default DashboardHeader;
