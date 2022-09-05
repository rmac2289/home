import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function States({ stateData }) {
  let oregon, washington, california;
  washington = stateData[0].washington;
  oregon = stateData[1].oregon;
  california = stateData[2].california;
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

              <tr>
                <th className="tableTitle">Politics</th>

                <th></th>
                <th></th>
                <th></th>
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

              <tr>
                <th className="tableTitle">Facts</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td className="rowTitle">Population (m)</td>
                <td>{oregon.population}</td>
                <td>{washington.population}</td>
                <td>{california.population}</td>
              </tr>
              <tr>
                <td className="rowTitle">National Parks</td>
                <td>10</td>
                <td>17</td>
                <td>33</td>
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
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
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
          font-weight: 900;
        }
        .tableContainer {
          padding: 1rem;
          border: 1px solid white;
          border-radius: 10px;
          width: 80%;
        }
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
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
  let statesUrl =
    process.env.ENVIRONMENT === "dev"
      ? "http://localhost:3000/api/states"
      : "https://gorgeous-meerkat-3dd227.netlify.app/api/states";
  const statesRes = await fetch(statesUrl);
  const statesBody = await statesRes.json();
  let stateData = statesBody || null;

  // Props returned will be passed to the page component
  return { props: { stateData } };
}
