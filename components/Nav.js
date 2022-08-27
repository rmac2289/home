import Link from "next/link";
import _JSXStyle from "styled-jsx/style";
import { useRouter } from "next/router";

export default function Nav() {
  const { route } = useRouter();
  let homeRoute = "/";
  let isHome = route === homeRoute;
  return (
    <>
      <nav className="nav">
        <div className="linkContainer">
          <Link href="https://docs.google.com/spreadsheets/d/1CtsOadJXDh8gPqpf6wjf80H-vskG8PxRQnRoLu2mdCI/edit#gid=0">
            <a target="_blank">google sheet</a>
          </Link>
        </div>
        <div className="linkContainer">
          <Link href={isHome ? "/states" : "/"}>
            <a>{isHome ? "OR vs. WA" : "home"}</a>
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
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
