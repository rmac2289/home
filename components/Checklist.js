import { useState } from "react";

export const Checklist = () => {
  const [showChecklist, setShowChecklist] = useState(false);
  const toggleChecklist = () => {
    setShowChecklist(!showChecklist);
  };
  return (
    <>
      <div onClick={toggleChecklist}>
        <h4>Things to see</h4>
      </div>
      {showChecklist && (
        <div className="inputGroup">
          <label>
            <input type="checkbox" value="" />
            Local library
          </label>
          <label>
            <input type="checkbox" value="" />
            Downtown
          </label>
          <label>
            <input type="checkbox" value="" />
            Schools
          </label>
          <label>
            <input type="checkbox" value="" />
            Target
          </label>
          <label>
            <input type="checkbox" value="" />
            Coffee
          </label>
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
