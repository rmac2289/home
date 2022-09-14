import Notes from "./Notes";
import { useState, useEffect } from "react";

export const Checklist = ({
  checklistData,
  currentCity,
  isDevEnv,
  notes,
  notesUrl,
}) => {
  const [canEditNotes, setCanEditNotes] = useState(false);
  const toggleCanEditNotes = () => {
    setCanEditNotes(!canEditNotes);
  };

  let city = checklistData.filter((city) => city.city === currentCity);
  let items = Object.keys(city[0]);
  return (
    <>
      <div className="inputGroup">
        <h2>Checklist</h2>
        {items.map((item, index) => {
          if (item !== "_id" && item !== "city") {
            return (
              <div className="checklistItem" key={index}>
                {city[0][item] ? "✅" : "❌"}
                {"   "}
                {item}
              </div>
            );
          }
        })}
        <div className="notes">
          <div className="notesTitle">
            <div className="notesHeader">
              <h3 style={{ marginTop: "1rem", marginRight: "5px" }}>Notes</h3>
              <button
                onClick={toggleCanEditNotes}
                style={{ background: "white", color: "black", padding: 5 }}
              >
                {canEditNotes ? "cancel" : "edit"}
              </button>
            </div>

            <Notes
              canEditNotes={canEditNotes}
              city={currentCity}
              setCanEditNotes={setCanEditNotes}
              isDevEnv={isDevEnv}
              notes={notes}
              notesUrl={notesUrl}
            />
          </div>
        </div>
      </div>

      <style>
        {`
        .notesHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ProseMirror:focus {
          outline: none;
      }
      .ProseMirror h2 {
        padding: 0;
      }
      .ProseMirror li p, .ProseMirror h3, .ProseMirror h1 {
        margin-bottom: 2px;
      }
      .textMenu {
        border: 1px solid white;
        border-radius: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: .25rem;
        
      }
      p,h1,h2,h3,h4,h5,h6 {
        margin-top: 0;
      }
        .notes {
          padding: .5rem;
        }
        textarea {
          width: 100%;
          min-height: 100px;
          padding: .5rem;
          border: none;
          outline: none;
          opacity: 0.9;
          border-radius: 10px;
        }
        .inputGroup {
            display: flex;
            flex-direction: column;
        }
        .checklistItem {
          padding: .5rem;
        }
        button {
          background: black;
          color: white;
          outline: none;
          border: none;
          margin: 2px;
          border-radius: 3px;
          font-size: 14px;
        }
        button:hover {
          background: rgba(255,255,255,0.4)
        }
        .is-active {
          background: white;
          color: black;
        }
        h2 {
          padding: .5rem;
          color: orange;
        }
       ul, ol {
        padding-left: 20px;
        margin-top: .5em;
       }
       
        
          
  
    `}
      </style>
    </>
  );
};
