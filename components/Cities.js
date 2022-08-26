import Link from "next/link";
import _JSXStyle from "styled-jsx/style";
import Stats from "./Stats";
// pick a random city

export default function Cities({ dataArray }) {
  return (
    <>
      <div className="citiesContainer">
        {dataArray.map((city, index) => {
          return (
            <div key={index} className="city">
              <div>
                <Link href={city.cityGuideUrl}>
                  <a target="_blank">
                    <h2 className="cityName">
                      {city.cityName}, {city.state}
                    </h2>
                  </a>
                </Link>
              </div>
              {/* <img
              width="300"
              style={styles.img}
              src={city.image}
              alt={city.cityName}
            /> */}
              <div className="topContainer">
                <div className="iframeContainer">
                  <iframe
                    src={city.mapIframe}
                    className="iframe"
                    style={{ border: 0, borderRadius: 5 }}
                    width="300"
                    height="200"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <Stats
                  population={city.population}
                  medianHomePrice={city.medianHomePrice}
                  closestAirport={city.closestAirport}
                  timeToAirport={city.timeToAirport}
                  schoolGrade={city.schoolGrade}
                  rainyDays={city.rainyDays}
                  rainLink={city.rainLink}
                  housingLink={city.housingLink}
                  schoolLink={city.schoolLink}
                />
              </div>

              <p className="intro">{city.intro}</p>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .topContainer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .iframeContainer {
          width: 100%;
        }
        iframe {
          width: 100%;
        }
        @media screen and (min-width: 610px) {
          .citiesContainer {
            min-width: 610px;
            max-width: 80%;
          }
          .iframeContainer {
            width: 300px;
          }
          .topContainer {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
          }
        }
        .citiesContainer {
          width: 95%;
          display: grid;
          position: relative;
        }
        @media screen and (min-width: 1300px) {
          .citiesContainer {
            grid-template-columns: 1fr 1fr;
          }
        }

        img {
          border-radius: 5;
        }
        .city {
          border: 1px solid white;
          padding: 1rem;
          border-radius: 5px;
          margin: 15px;
          box-shadow: 0.25rem 0.25rem #d3d3d3;
        }

        .cityName {
          color: orange;
          border-bottom: 1px solid orange;
          cursor: pointer;
          transition: all 0.25s linear;
        }
        .cityName:hover {
          color: #ffd700;
          border-bottom: 1px solid #ffd700;
        }
      `}</style>
    </>
  );
}
