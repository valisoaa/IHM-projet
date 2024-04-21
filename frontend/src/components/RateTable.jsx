// eslint-disable-next-line react/prop-types
function RateTable({ data }) {
  console.log(data);
  return (
    <>
      <div className="my-4">
        <h5 className="text text-dark col-lg-12" style={{ fontWeight: "600" }}>
          Tableau de conversion
        </h5>
        <div
          className="container table-responsive table-bordered d-flex my-3 "
          style={{ columnGap: "10px", fontFamily: "MonoSpace" }}
        >
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">{data.Code.source}</th>
                <th className="text-center">{data.Code.dest}</th>
              </tr>
            </thead>
            <tbody>
              {data.Value.cash.map((c) => (
                <tr key={c}>
                  <td className="text-center">
                    {data.Code.unit_source + "" + c}
                  </td>
                  <td className="text-center">
                    {data.Code.unit_dest +
                      "" +
                      (c * data.Value.source).toFixed(4)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="table ">
            <thead>
              <tr>
                <th className="text-center">{data.Code.dest}</th>
                <th className="text-center">{data.Code.source}</th>
              </tr>
            </thead>
            <tbody>
              {data.Value.cash.map((c) => (
                <tr key={c}>
                  <td className="text-center">
                    {data.Code.unit_dest + "" + c}
                  </td>
                  <td className="text-center">
                    {data.Code.unit_source +
                      "" +
                      (c * data.Value.dest).toFixed(4)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default RateTable;
