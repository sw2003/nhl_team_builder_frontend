
const mongoose = require('mongoose');


main().catch(err => console.log(err));
async function main() {
  const uri = process.env.database_uri;

  const local_uri = "mongodb://127.0.0.1:27017/nhl"

  await mongoose.connect(uri);
}







