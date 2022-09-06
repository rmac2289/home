import { useState } from "react";
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

export default function Weather({ weather }) {
  let avgLows = [];
  let avgHighs = [];
  let labels = [];
  let hotDays = [];
  let coldDays = [];
  let rainyDays = [];
  let snowyDays = [];
  weather.map((month) => {
    avgHighs.push(month.high);
    avgLows.push(month.low);
    let monthName = month.month;
    labels.push(monthName);
    hotDays.push(month.hotDays);
    rainyDays.push(month.rainyDays);
    coldDays.push(month.freezingDays);
    snowyDays.push(month.snowyDays);
  });
  const barData = {
    labels,
    datasets: [
      {
        label: "+90˚ days",
        data: hotDays,
        backgroundColor: "orange",
        borderColor: "orange",
      },
      {
        label: "rainy days",
        data: rainyDays,
        backgroundColor: "skyblue",
        borderColor: "skyblue",
      },
      {
        label: "-32˚ days",
        data: coldDays,
        backgroundColor: "purple",
        borderColor: "purple",
      },
      {
        label: "snowy",
        data: snowyDays,
        backgroundColor: "white",
        borderColor: "white",
      },
    ],
  };
  const data = {
    labels,
    datasets: [
      {
        label: "High",
        data: avgHighs,
        backgroundColor: "orange",
        borderColor: "orange",
      },
      {
        label: "Low",
        data: avgLows,
        backgroundColor: "skyblue",
        borderColor: "skyblue",
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
        <div className="barContainer">
          <Bar options={options} data={barData} />
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
