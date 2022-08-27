import { userAgent } from "next/server";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function States({ taxes }) {
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
  const res = await fetch(url, {
    headers: {
      "User-Agent": `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36});`,
    },
  });
  const body = await res.json();
  let taxes = body;
  // Props returned will be passed to the page component
  return { props: { taxes } };
}
