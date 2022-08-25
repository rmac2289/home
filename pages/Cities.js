import Link from "next/link";
import _JSXStyle from "styled-jsx/style";

// pick a random city

export const Cities = ({ dataArray }) => {
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
                <div className="stats">
                  <div className="homePriceP">
                    <strong className="homePrice">Population: </strong>
                    {city.population}
                  </div>
                  <p className="homePriceP">
                    <strong className="homePrice">Median Home Price: </strong>
                    {city.medianHomePrice}
                  </p>
                  <p className="homePriceP">
                    <strong className="homePrice">Closest Airport: </strong>
                    {city.closestAirport}, {city.timeToAirport} drive
                  </p>
                  <p className="homePriceP">
                    <strong className="homePrice">Schools: </strong>
                    {city.schoolGrade}
                  </p>
                </div>
              </div>
              <p className="intro">{city.intro}</p>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .citiesContainer {
          min-width: 610px;
          max-width: 75%;
          display: grid;
        }
        @media screen and (min-width: 1300px) {
          .citiesContainer {
            grid-template-columns: 1fr 1fr;
          }
        }
        .topContainer {
          display: flex;
          align-items: flex-start;
        }
        img {
          borderradius: 5;
        }
        .stats {
          margin-bottom: 1rem;
          margin-left: 1rem;
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
        .homePrice {
          color: orange;
        }
      `}</style>
    </>
  );
};
