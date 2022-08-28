import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function States({ taxes }) {
  const [parks, setParks] = useState([]);
  const [orParks, setOrParks] = useState({});
  const [waParks, setWaParks] = useState({});

  useEffect(() => {
    (async () => {
      let npsUrl = `https://developer.nps.gov/api/v1/parks?limit=500&api_key=3YdcawfOu9ProaUtfU3LiCKelraCFh1PgAdGSgTA`;
      const npsRes = await fetch(npsUrl);
      let npsBody = await npsRes.json();
      setParks(npsBody);
      let or = [];
      let wa = [];
      npsBody.data.map((park, index) => {
        if (park.states.includes("OR")) {
          or.push(park);
        }
        if (park.states.includes("WA")) {
          wa.push(park);
        }
      });
      setOrParks({ totalParks: or.length, parkData: or });
      setWaParks({ totalParks: wa.length, parkData: wa });
    })();
  }, []);

  return (
    <>
      <Nav />
      <h1 className={styles.title}>Oregon vs. Washington</h1>

      <main>
        <div className="tableContainer">
          <table>
            <tr>
              <th className="tableTitle">Taxes</th>
              <th>OR</th>
              <th>WA</th>
            </tr>
            <tr>
              <td className="rowTitle">Property</td>
              <td>{taxes.Oregon["Property Tax"]}%</td>
              <td>{taxes.Washington["Property Tax"]}%</td>
            </tr>
            <tr>
              <td className="rowTitle">Income</td>
              <td>{taxes.Oregon["Income Tax"]}%</td>
              <td>{taxes.Washington["Income Tax"]}%</td>
            </tr>
            <tr>
              <td className="rowTitle">Sales</td>
              <td>{taxes.Oregon["Sales Tax"]}%</td>
              <td>{taxes.Washington["Sales Tax"]}%</td>
            </tr>
          </table>
        </div>
        <div className="tableContainer">
          <table>
            <tr>
              <th className="tableTitle">Outdoors</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td className="rowTitle">National Parks</td>
              <td>{orParks.totalParks}</td>
              <td>{waParks.totalParks}</td>
            </tr>
          </table>
        </div>
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
        .tableTitle {
          border-top: none;
          border-left: none;
          color: white;
          font-size: 22px;
          text-align: left;
        }
        .rowTitle {
          text-align: left;
          width: 200px;
        }
        .tableContainer {
          padding: 1rem;
          border: 1px solid white;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 300px;
        }
        tr {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        td,
        th {
          text-align: center;
          padding: 8px;
        }

        th {
          color: orange;
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
