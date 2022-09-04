import Link from "next/link";

export default function Stats({
  population,
  medianHomePrice,
  closestAirport,
  timeToAirport,
  schoolGrade,
  rainyDays,
  rainLink,
  housingLink,
  schoolLink,
  costOfLiving,
  costOfLivingLink,
}) {
  return (
    <>
      <div className="stats">
        <p>
          <strong>Population: </strong>
          <span>{population}</span>
        </p>
        <Link href={housingLink}>
          <a target="_blank">
            <p>
              <strong>Median Home Price: </strong>
              <span>{medianHomePrice}</span>
            </p>
          </a>
        </Link>
        <p>
          <strong>Closest Airport: </strong>
          <span>
            {closestAirport}, {timeToAirport} drive
          </span>
        </p>
        <Link href={schoolLink}>
          <a target="_blank">
            <p>
              <strong>Schools: </strong>
              <span>{schoolGrade}</span>
            </p>
          </a>
        </Link>
        <Link href={rainLink}>
          <a target="_blank">
            <p>
              <strong>Rainy Days: </strong>
              <span>{rainyDays}</span>
            </p>
          </a>
        </Link>
        <Link href={costOfLivingLink}>
          <a target="_blank">
            <p>
              <strong>Cost of Living: </strong>
              <span>{costOfLiving}</span>
            </p>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          span {
            color: white;
          }
          strong {
            transition: all 0.05s linear;
          }
          p {
            transition: all 0.05s linear;
            color: orange;
            border: none;
          }
          @media screen and (min-width: 610px) {
            p {
              padding-top: 0;
              margin-top: 0;
            }
          }
          a p:hover {
            color: #ffd700;
            text-decoration: underline;
          }
          .stats {
            margin-bottom: 1rem;
            margin-left: 1rem;
          }
        `}
      </style>
    </>
  );
}
