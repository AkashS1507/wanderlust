const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const MONGO_URL = "mongodb+srv://akashsahu:Akash%402004@cluster0.93iin0u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {  
     console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj, owner: "68bbe7a5a2a2f0b009ec1032" }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();