import { useState } from "react";

export const Checklist = ({ checklistData, currentCity }) => {
  const [showChecklist, setShowChecklist] = useState(false);
  const toggleChecklist = () => {
    setShowChecklist(!showChecklist);
  };
  let city = checklistData.filter((city) => city.city === currentCity);
  // add on change for updating db
  let items = Object.keys(city[0]);
  return (
    <>
      <div onClick={toggleChecklist}>
        <h4>Things to see</h4>
      </div>
      {showChecklist && (
        <div className="inputGroup">
          {items.map((item) => {
            if (item !== "_id" && item !== "city") {
              return (
                <label>
                  <input type="checkbox" value="" checked={city[0][item]} />
                  {item}
                </label>
              );
            }
          })}
          {/* <label>
            <input type="checkbox" value="" checked={city[0].library} />
            Local library
          </label>
          <label>
            <input type="checkbox" value="" checked={city[0].downtown} />
            Downtown
          </label>
          <label>
            <input type="checkbox" value="" checked={city[0].schools} />
            Schools
          </label>
          <label>
            <input type="checkbox" value="" checked={city[0].target} />
            Target
          </label>
          <label>
            <input type="checkbox" value="" checked={city[0].coffee} />
            Coffee
          </label>
          <label>
            <input
              type="checkbox"
              value=""
              checked={city[0].haveVisitedBefore}
            />
            Visited before?
          </label> */}
        </div>
      )}
      <style>
        {`
        .inputGroup {
            display: flex;
            flex-direction: column;
        }
        h4 {
            color: orange;
            text-decoration: underline;
          }
          div {
            cursor: pointer;
          }
          h4:hover {
            color: #ffd700;
          }
    `}
      </style>
    </>
  );
};
