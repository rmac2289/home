const { MongoClient } = require("mongodb");
let pw = process.env.DB_PW;
let user = process.env.DB_USER;
let db_string = process.env.DB_CONNECTION_STRING;
const uri = `mongodb+srv://${user}:${pw}${db_string}`;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  await client.connect();
  console.log("mongodb connected");
  let db = client.db("home");
  let collection = db.collection("notes");

  if (req.method === "GET") {
    let notes = await collection.find({}).toArray();
    res.status(200).json(notes);
  }
  if (req.method === "PATCH") {
    collection.updateOne(
      { city: req.body.city },
      { $set: { content: req.body.content } }
    );
    res.status(201).json({ message: `${req.body.city} updated.` });
  }
}
