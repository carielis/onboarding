// @ts-ignore
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

exports = {
  connect,
  client,
};
