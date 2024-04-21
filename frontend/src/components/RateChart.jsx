import axios from "axios";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import VarianceTable from "./VarianceTable";

const API_URL = `http://localhost:8000/api/historique`;

// eslint-disable-next-line react/prop-types
function RateChart({ source, destination }) {
  const [data, setData] = useState([
    {
      date: "",
      valeur: "",
    },
  ]);
  const [status, setStatus] = useState(false);
  const [variance, setVariance] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/${source}-${destination}`)
      .then((res) => {
        setData(
          Object.entries(res.data.data).map(([key, val]) => ({
            date: key,
            valeur: val,
          }))
        );
        setVariance(res.data.variance);
        setStatus(res.data.status);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [source, destination]);
  return (
    <>
      <h5 className="text text-dark col-lg-12" style={{ fontWeight: "600" }}>
        Variation {source + "/" + destination}
      </h5>

      <div className="d-flex justify-content-center col-lg-12 col-md-12 mb-4">
        <LineChart
          data={data}
          margin={{
            top: 40,
            right: 5,
            left: 20,
            bottom: 0,
          }}
          width={800}
          height={500}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <XAxis dataKey="date">
            <Label value="date" position="insideBottomRight" offset="-10" />
          </XAxis>
          <YAxis
            label={{
              value: "Taux",
              position: "center",
              offset: 80,
              angle: -90,
            }}
          ></YAxis>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="valeur"
            stroke="#BD4515"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
      {status ? (
        <VarianceTable
          DATA={data}
          VARIANCE={variance}
          COURS={source + "/" + destination}
        />
      ) : (
        <h2>Données indisponible</h2>
      )}
    </>
  );
}

export default RateChart;
