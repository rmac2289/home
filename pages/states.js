import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function States({ stateData }) {
  const [parks, setParks] = useState([]);
  const [orParks, setOrParks] = useState({});
  const [waParks, setWaParks] = useState({});
  const [caParks, setCaParks] = useState({});
  const { oregon, washington, california } = stateData;

  useEffect(() => {
    (async () => {
      let npsUrl = `https://developer.nps.gov/api/v1/parks?limit=500&api_key=3YdcawfOu9ProaUtfU3LiCKelraCFh1PgAdGSgTA`;
      const npsRes = await fetch(npsUrl);
      let npsBody = await npsRes.json();
      setParks(npsBody);
      let or = [];
      let wa = [];
      let ca = [];
      npsBody.data.map((park, index) => {
        if (park.states.includes("OR")) {
          or.push(park);
        }
        if (park.states.includes("WA")) {
          wa.push(park);
        }
        if (park.states.includes("CA")) {
          ca.push(park);
        }
      });
      setOrParks({ totalParks: or.length, parkData: or });
      setWaParks({ totalParks: wa.length, parkData: wa });
      setCaParks({ totalParks: ca.length, parkData: ca });
    })();
  }, []);

  return (
    <>
      <Nav />
      <h1 className={styles.title}>Oregon vs. Washington</h1>
      <div className="container">
        <main>
          <div className="tableContainer">
            <table>
              <tr>
                <th className="tableTitle">Taxes</th>
                <th>OR</th>
                <th>WA</th>
                <th>CA</th>
              </tr>
              <tr>
                <td className="rowTitle">Property</td>
                <td>{oregon.taxes["Property Tax"]}%</td>
                <td>{washington.taxes["Property Tax"]}%</td>
                <td>{california.taxes["Property Tax"]}%</td>
              </tr>
              <tr>
                <td className="rowTitle">Income</td>
                <td>{oregon.taxes["Income Tax"]}%</td>
                <td>{washington.taxes["Income Tax"]}%</td>
                <td>{california.taxes["Income Tax"]}%</td>
              </tr>
              <tr>
                <td className="rowTitle">Sales</td>
                <td>{oregon.taxes["Sales Tax"]}%</td>
                <td>{washington.taxes["Sales Tax"]}%</td>
                <td>{california.taxes["Sales Tax"]}%</td>
              </tr>
            </table>
          </div>
          <div className="tableContainer">
            <table>
              <tr>
                <th className="tableTitle">Politics</th>
                {}
                <th>OR</th>
                <th>WA</th>
                <th>CA</th>
              </tr>
              <tr>
                <td className="rowTitle">Governor</td>
                <td>{oregon.politics.governor}</td>
                <td>{washington.politics.governor}</td>
                <td>{california.politics.governor}</td>
              </tr>
              <tr>
                <td className="rowTitle">House (D/R)</td>
                <td>
                  {oregon.politics.house.d}/{oregon.politics.house.r}
                </td>
                <td>
                  {washington.politics.house.d}/{washington.politics.house.r}
                </td>
                <td>
                  {california.politics.house.d}/{california.politics.house.r}
                </td>
              </tr>
            </table>
          </div>
          <div className="tableContainer">
            <table>
              <tr>
                <th className="tableTitle">Facts</th>
                <th>OR</th>
                <th>WA</th>
                <th>CA</th>
              </tr>
              <tr>
                <td className="rowTitle">Population (m)</td>
                <td>{oregon.population}</td>
                <td>{washington.population}</td>
                <td>{california.population}</td>
              </tr>
              <tr>
                <td className="rowTitle">National Parks</td>
                <td>{orParks.totalParks}</td>
                <td>{waParks.totalParks}</td>
                <td>{caParks.totalParks}</td>
              </tr>
              <tr>
                <td className="rowTitle">Nickname</td>
                <td>{oregon.nickname}</td>
                <td>{washington.nickname}</td>
                <td>{california.nickname}</td>
              </tr>
            </table>
          </div>
        </main>
      </div>

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
          align-items: flex-start;
          margin: 1rem;
        }
        .tableTitle {
          border-top: none;
          border-left: none;
          color: white;
          font-size: 22px;
          text-align: left;
          color: orange;
        }
        .container {
          margin: 1rem;
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
          text-align: left;
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
      ? "http://localhost:3000/api/states"
      : "https://gorgeous-meerkat-3dd227.netlify.app/api/states";
  const res = await fetch(url);
  const body = await res.json();
  let stateData = body;

  // Props returned will be passed to the page component
  return { props: { stateData } };
}
