import Link from "next/link";
import _JSXStyle from "styled-jsx/style";
import { useRouter } from "next/router";

export default function Nav() {
  const { route } = useRouter();
  return (
    <>
      <nav className="nav">
        <div className="linkContainer">
          <Link href="https://docs.google.com/spreadsheets/d/1CtsOadJXDh8gPqpf6wjf80H-vskG8PxRQnRoLu2mdCI/edit#gid=0">
            <a target="_blank">google sheet</a>
          </Link>
        </div>
        <div className="linkContainer">
          <Link href="/states">
            <a id="states">OR vs. WA</a>
          </Link>
        </div>
        <div className="linkContainer">
          <Link href="/">
            <a id="home">home</a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        .nav {
          height: 65px;
          padding: 1rem;
          display: flex;
          background: black;
          align-items: center;
          border-bottom: 1px solid white;
        }
        .linkContainer {
          margin-right: 1.5rem;
        }
        a {
          color: white;
          font-weight: 500;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #states {
          color: ${route === "/states" && "grey"};
        }
        #home {
          color: ${route === "/" && "grey"};
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
