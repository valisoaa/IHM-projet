import axios from "axios";
import { useEffect, useState } from "react";
import { BiTransfer } from "react-icons/bi";
import { useParams } from "react-router";
import RateTable from "./RateTable";
import RateChart from "./RateChart";

const API_URL = `http://localhost:8000/api`;

function Converter() {
  const { id } = useParams();
  const [currency, setCurrency] = useState([]);
  const [amount, setAmount] = useState(1);
  const [source, setSource] = useState(id);
  const [result, setResult] = useState(0);
  const [data, setData] = useState({
    Code: {
      source: "",
      dest: "",
      unit_source: "",
      unit_dest: "",
    },
    Value: {
      source: 0,
      dest: 0,
      cash: [],
    },
  });
  const [destination, setDestination] = useState("MGA");
  const [page] = useState(1);
  const [limit] = useState(10);

  //==================================
  // Récupere les données de currency
  //==================================
  useEffect(() => {
    axios
      .get(`${API_URL}/currencies`)
      .then((res) => {
        setCurrency(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, limit]);

  //================================
  // Récupere les données de convert
  //================================
  useEffect(() => {
    axios
      .get(`${API_URL}/converter/${source}-${amount}-${destination}`)
      .then((res) => {
        setResult(res.data.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [source, destination, amount]);

  const handleSwap = () => {
    const temp = source;
    setSource(destination);
    setDestination(temp);
  };

  return (
    <>
      <div className="wrapper">
        <h2 className="subtitle mt-3 mb-3">
          Convertir{" "}
          {currency.filter((el) => el.Code == source).length
            ? currency.filter((el) => el.Code == source)[0].Devise
            : ""}{" "}
          en{" "}
          {currency.filter((el) => el.Code == destination).length
            ? currency.filter((el) => el.Code == destination)[0].Devise
            : ""}
        </h2>
        <hr />

        <div className="row m-0 d-flex justify-content-between align-items-center mt-3">
          <div className="col-lg-5">
            <div className="row input-group">
              <div className="col-lg-8">
                <select
                  className="form-select form-select-lg currency-form"
                  name=""
                  id=""
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                >
                  {" "}
                  {currency.map((c) => (
                    <option
                      key={c.id}
                      selected={c.Code == id ? true : false}
                      value={c.Code}
                    >
                      {c.Devise}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-lg-4">
                <input
                  type="number"
                  className="form-control form-control-lg currency-form text-end"
                  aria-describedby="helpId"
                  value={amount}
                  min={0}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder=""
                />
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="d-grid gap-2">
              <button
                type="button"
                name=""
                id=""
                className="btn btn-swap"
                onClick={handleSwap}
              >
                <span className="">
                  <BiTransfer />
                </span>
              </button>
            </div>
          </div>

          <div className=" row col-lg-5" style={{ marginLeft: "12px" }}>
            <div className=" input-group">
              <div className="col-lg-8 ">
                <select
                  className="form-select form-select-lg currency-form"
                  name=""
                  id=""
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
                  {currency.map((c) => (
                    <option key={c.id} value={c.Code}>
                      {c.Devise}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-lg-4">
                <input
                  type="number"
                  className="form-control form-control-lg currency-form text-end"
                  value={result}
                  aria-describedby="helpId"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RateTable data={data} />
      <RateChart source={source} destination={destination} />
    </>
  );
}

export default Converter;
