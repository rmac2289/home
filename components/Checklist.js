import Notes from "./Notes";

export const Checklist = ({ checklistData, currentCity }) => {
  // const [showChecklist, setShowChecklist] = useState(false);
  // const toggleChecklist = () => {
  //   setShowChecklist(!showChecklist);
  // };
  let city = checklistData.filter((city) => city.city === currentCity);
  // add on change for updating db
  let items = Object.keys(city[0]);
  return (
    <>
      <div className="inputGroup">
        <h2>Places to go</h2>
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
            <h3>Notes</h3>
            <Notes />
          </div>
        </div>
      </div>

      <style>
        {`
        
        .ProseMirror:focus {
          outline: none;
      }
      p {
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
        h2 {
          padding: .5rem;
          color: orange;
        }
       
        
          
  
    `}
      </style>
    </>
  );
};
