const { MongoClient } = require("mongodb");
let pw = process.env.DB_PW;
let user = process.env.DB_USER;
let db_string = process.env.DB_CONNECTION_STRING;
const uri = `mongodb+srv://${user}:${pw}${db_string}`;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === "GET") {
    await client.connect();
    console.log("mongodb connected");
    let db = client.db("home");
    let collection = db.collection("states");
    let stateData = await collection.find({}).toArray();
    client.close();
    res.status(200).json(stateData);
  }
}
