import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Charts from "../components/Charts";
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

export default function Home({ dataArray }) {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <Charts dataArray={dataArray} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps() {
  let url =
    process.env.ENVIRONMENT === "dev"
      ? "http://localhost:3000/api/data"
      : "https://gorgeous-meerkat-3dd227.netlify.app/api/data";
  const res = await fetch(url);
  const body = await res.json();
  let dataArray = body;

  return { props: { dataArray } };
}
