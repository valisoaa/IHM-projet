import DeviseTable from "./DeviseTable";
import Devise from "./Devise";

function DeviseSection() {
  return (
    <>
      <section id="content">
        <main>
          <div className="table-data">
            <DeviseTable />
          </div>
          <div className="table-data">
            <Devise />
            <DeviseTable />
          </div>
        </main>
      </section>
    </>
  );
}

export default DeviseSection;
