import { useRouter } from "next/router";
import { Checklist } from "../components/Checklist";
import Nav from "../components/Nav";
import Weather from "../components/Weather";

export default function City({ checklistData, dataArray, isDevEnv, notes }) {
  const router = useRouter();
  const currentCity = router.query.city;
  const weather = dataArray.filter((city) => city.cityName === currentCity);
  // const note = notes.filter((city) => city.city === currentCity.toLowerCase());

  let data = checklistData;

  return (
    <>
      <Nav />
      <div className="container">
        <header>
          <h1>{currentCity}</h1>
        </header>
        <main>
          <section>
            <Checklist
              checklistData={data}
              currentCity={currentCity}
              isDevEnv={isDevEnv}
              notes={notes}
            />
          </section>
          <section className="weatherContainer">
            <Weather weather={weather[0].weather} />
          </section>
        </main>
      </div>
      <style jsx>
        {`
          .container {
            padding: 1rem;
          }
          header {
            margin: 1rem;
          }
          h1 {
            text-align: left;
            color: orange;
            font-size: 42px;
            padding: 1rem;
          }
          main {
            min-width: 400px;
            min-height: 400px;

            padding: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          section {
            width: 95%;
            min-height: 200px;
            border: 1px solid white;
            border-radius: 10px;
            margin: 1rem;
            padding: 1rem;
          }
          .weatherContainer {
            border: none;
            padding: 0;
          }
        `}
      </style>
    </>
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { city: "Lacey" } },
      { params: { city: "Salem" } },
      { params: { city: "McMinnville" } },
      { params: { city: "Auburn" } },
      { params: { city: "Tacoma" } },
      { params: { city: "Vancouver" } },
      { params: { city: "Olympia" } },
      { params: { city: "Corvallis" } },
      { params: { city: "Spokane" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps() {
  let isDevEnv = process.env.ENVIRONMENT === "dev";

  let checklistUrl = isDevEnv
    ? "http://localhost:3000/api/checklist"
    : "https://gorgeous-meerkat-3dd227.netlify.app/api/checklist";
  const checklistRes = await fetch(checklistUrl);
  const checklistBody = await checklistRes.json();
  let checklistData = checklistBody;

  let url = isDevEnv
    ? "http://localhost:3000/api/data"
    : "https://gorgeous-meerkat-3dd227.netlify.app/api/data";
  const res = await fetch(url);
  const body = await res.json();
  let dataArray = body;

  let notesUrl = isDevEnv
    ? "http://localhost:3000/api/notes"
    : "https://gorgeous-meerkat-3dd227.netlify.app/api/notes";
  const notesRes = await fetch(notesUrl);
  const notesBody = await notesRes.json();
  let notes = notesBody;

  return { props: { dataArray, checklistData, isDevEnv, notes } };
}
