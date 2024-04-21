import Converter from "../components/Converter";

import Header from "../partials/Header";

function Currency() {
  return (
    <>
      <Header />
      <div
        className="container d-flex flex-column my-3"
        style={{ padding: "0px 10%", rowGap: "20px" }}
      >
        <Converter />
      </div>
    </>
  );
}

export default Currency;
