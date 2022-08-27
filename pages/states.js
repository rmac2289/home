import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function States({ taxes }) {
  const [parks, setParks] = useState([]);
  const [orParks, setOrParks] = useState([]);
  const [waParks, setWaParks] = useState([]);

  useEffect(() => {
    (async () => {
      let npsUrl = `https://developer.nps.gov/api/v1/parks?stateCode=wa%2Cor&api_key=3YdcawfOu9ProaUtfU3LiCKelraCFh1PgAdGSgTA`;
      const npsRes = await fetch(npsUrl);
      let npsBody = await npsRes.json();
      setParks(npsBody);
      setOrParks(npsBody.data.filter((park) => park.states === "OR"));
      setWaParks(npsBody.data.filter((park) => park.states === "WA"));
    })();
  }, []);

  return (
    <>
      <Nav />
      <h1 className={styles.title}>Oregon vs. Washington</h1>

      <main>
        <table>
          <tr>
            <th style={{ borderTop: "none", borderLeft: "none" }}></th>
            <th>Oregon</th>
            <th>Washington</th>
          </tr>
          <tr>
            <td>Property tax</td>
            <td>{taxes.Oregon["Property Tax"]}%</td>
            <td>{taxes.Washington["Property Tax"]}%</td>
          </tr>
          <tr>
            <td>Income tax</td>
            <td>{taxes.Oregon["Income Tax"]}%</td>
            <td>{taxes.Washington["Income Tax"]}%</td>
          </tr>
          <tr>
            <td>Sales tax</td>
            <td>{taxes.Oregon["Sales Tax"]}%</td>
            <td>{taxes.Washington["Sales Tax"]}%</td>
          </tr>
        </table>
      </main>

      <style jsx>{`
        main {
          height: 100vh;
          width: 100vw;
          min-height: 100vh;
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 75%;
        }

        td,
        th {
          text-align: center;
          padding: 8px;
        }

        th {
          color: orange;
        }

        tr:nth-child(even) {
          background-color: white;
          color: black;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  let url =
    process.env.ENVIRONMENT === "dev"
      ? "http://localhost:3000/api/taxes"
      : "https://gorgeous-meerkat-3dd227.netlify.app/api/taxes";
  const res = await fetch(url);
  const body = await res.json();
  let taxes = body;

  // Props returned will be passed to the page component
  return { props: { taxes } };
}
