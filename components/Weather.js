export default function Weather({ weather }) {
  console.log(weather);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Avg High</th>
            <th>Avg Low</th>
            <th>Hot Days</th>
            <th>Freezing Days</th>
            <th>Rainy Days</th>
            <th>Snowy Days</th>
          </tr>
          {weather.map((month) => {
            return (
              <tr>
                <td>{month.month}</td>
                <td>{month.high}°</td>
                <td>{month.low}°</td>
                <td>{month.hotDays}</td>
                <td>{month.freezingDays}</td>
                <td>{month.rainyDays}</td>
                <td>{month.snowyDays}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <style jsx>{`
        .tableTitle {
          border-top: none;
          border-left: none;
          color: white;
          font-size: 22px;
          text-align: left;
        }
        .rowTitle {
          text-align: left;
          width: 200px;
        }
        .tableContainer {
          padding: 1rem;
          border: 1px solid white;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        tr {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        td,
        th {
          text-align: center;
          padding: 8px;
        }
        td:first-child {
          text-align: left;
        }
        th {
          color: orange;
        }
      `}</style>
    </>
  );
}
