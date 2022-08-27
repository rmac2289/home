import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function States({ taxes }) {
  console.log(taxes);
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>Oregon vs. Washington</h1>
        <div>Washington: {JSON.stringify(taxes.Washington)}</div>
        <div>Oregon: {JSON.stringify(taxes.Oregon)}</div>
      </main>

      <style jsx>{`
        main {
          height: 100vh;
          width: 100vw;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/taxes");
  const body = await res.json();
  let taxes = body;
  // Props returned will be passed to the page component
  return { props: { taxes } };
}
