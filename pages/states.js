import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function States({ taxes }) {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>Oregon vs. Washington</h1>
        <div>tax info</div>
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
