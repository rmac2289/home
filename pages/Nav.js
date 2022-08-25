import Link from "next/link";
import _JSXStyle from "styled-jsx/style";
import sheets from "../public/sheets.png";
import Image from "next/image";
export const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="linkContainer">
          <Link href="https://docs.google.com/spreadsheets/d/1CtsOadJXDh8gPqpf6wjf80H-vskG8PxRQnRoLu2mdCI/edit#gid=0">
            <a target="_blank">
              <Image
                src={sheets}
                alt="google sheets"
                layout="fixed"
                width="20px"
                height="30px"
              />
            </a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        .linkContainer {
          border-radius: 10px;
          cursor: pointer;
          height: 50px;
          width: 50px;
          background-color: white;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin: 0;
          transition: all 0.25s linear;
          box-shadow: none;
        }
        .linkContainer:hover {
          transform: scale(1.1);
          box-shadow: 0px 1px 3px 1px grey;

        }
        .nav {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          height: 100px;
          padding: 1rem;
        }
        div {
          margin: 1rem;
        }
        a {
          color: black;
          font-size: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </>
  );
};
