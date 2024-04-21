import { ThreeDots } from "react-loader-spinner";

function Spinner() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <ThreeDots color="#bd4515" width={50} />
      </div>
    </div>
  );
}

export default Spinner;
