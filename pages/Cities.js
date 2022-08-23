import Link from "next/link";

export const Cities = ({ dataArray }) => {
  return (
    <div style={styles.citiesContainer}>
      {dataArray.map((city, index) => {
        return (
          <div key={index} style={styles.city}>
            <Link href={city.cityGuideUrl}>
              <a target="_blank">
                <h2 style={styles.cityName}>
                  {city.city}, {city.state}
                </h2>
              </a>
            </Link>
            <img
              width="300"
              style={styles.img}
              src={city.image}
              alt={city.cityName}
            />
            <p style={styles.homePriceP}>
              <strong style={styles.homePrice}>Median Home Price: </strong>
              {city.medianHomePrice}
            </p>
            <p>{city.intro}</p>
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  citiesContainer: {
    width: "100%",
  },
  img: {
    borderRadius: 5,
  },
  state: {},
  city: {
    border: "1px solid white",
    padding: "1rem",
    borderRadius: 5,
    margin: "10px",
  },
  cityName: {
    color: "orange",
    borderBottom: "1px solid orange",
    cursor: "pointer",
  },
  homePrice: {
    color: "lightblue",
  },
  homePriceP: {},
};
