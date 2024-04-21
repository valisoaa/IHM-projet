import { Blocks } from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <Blocks visible={true} height="60" width="700" ariaLabel="dna-loading" />
    </div>
  );
}

export default LoadingSpinner;
