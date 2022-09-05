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
      </div>

      <style>
        {`
        .inputGroup {
            display: flex;
            flex-direction: column;
        }
        .checklistItem {
          padding: .5rem;
        }
        
          
  
    `}
      </style>
    </>
  );
};
