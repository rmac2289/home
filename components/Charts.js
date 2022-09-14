import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);
let labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "white",
      },
    },
    y: {
      ticks: {
        color: "white",
      },
    },
  },

  plugins: {
    legend: {
      position: "top",
      align: "left",
      labels: { padding: 15, color: "white" },
    },
  },
};

export default function Charts({ dataArray }) {
  const salem = dataArray.filter(
    (city) => city.cityName.toLowerCase() === "salem"
  );
  const spokane = dataArray.filter(
    (city) => city.cityName.toLowerCase() === "spokane"
  );
  const lacey = dataArray.filter(
    (city) => city.cityName.toLowerCase() === "lacey"
  );
  let salemData = salem[0].weather;
  let spokaneData = spokane[0].weather;
  let laceyData = lacey[0].weather;

  const data = {
    labels,
    datasets: [
      {
        label: "salem",
        data: [1],
        backgroundColor: "orange",
        borderColor: "orange",
      },
    ],
  };

  return (
    <>
      <div className="chartsHeader">
        <h2>Weather by Month</h2>
        <div className="lineContainer">
          <Line color="white" options={options} data={data} />
        </div>
      </div>

      <style jsx>{`
        .lineContainer,
        .barContainer {
          width: 100%;
          padding: 1rem;
        }

        .chartsHeader h2 {
          color: orange;
          padding: 1rem;
        }

        h4 {
          color: orange;
          text-decoration: underline;
        }

        h4:hover {
          color: #ffd700;
        }
      `}</style>
    </>
  );
}
