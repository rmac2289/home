// export const stateData = {
//   washington: {
//     nickname: "Evergreen",
//     taxes: {
//       "Income Tax": "0",
//       "Sales Tax": "6.5",
//       "Property Tax": "0.93",
//     },
//     politics: {
//       governor: "D",
//       house: { d: 7, r: 3 },
//     },
//     population: "7.9",
//     geography: {
//       highestPoint: { name: "Mt. Rainier", elevation: "14,411" },
//     },
//   },
//   oregon: {
//     nickname: "Beaver",
//     taxes: { "Income Tax": "8", "Sales Tax": "0", "Property Tax": "0.9" },
//     politics: {
//       governor: "D",
//       house: { d: 4, r: 1 },
//     },
//     population: "4.2",
//     geography: {
//       highestPoint: { name: "Mt. Hood", elevation: "11,249" },
//     },
//   },
//   california: {
//     nickname: "Golden",
//     taxes: {
//       "Income Tax": "8",
//       "Sales Tax": "7.25",
//       "Property Tax": "1.07",
//     },
//     politics: {
//       governor: "D",
//       house: { d: 42, r: 11 },
//     },
//     population: "40",
//     geography: {
//       highestPoint: { name: "Mt. Whitney", elevation: "14,505" },
//     },
//   },
// };
const { MongoClient } = require("mongodb");
let pw = process.env.DB_PW;
const uri = `mongodb+srv://admin:${pw}@cluster0.lwfzbrp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === "GET") {
    await client.connect();
    console.log("client connected");
    let db = client.db("home");
    let collection = db.collection("states");
    let stateData = await collection.find({}).toArray();
    client.close();
    res.status(200).json(stateData);
  }
}
